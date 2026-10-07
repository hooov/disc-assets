# Colour correction for the Spotify cover photo (hovjsyy, 2026-10-06).
# Usage: python src/grade-photo.py src/suzy-headphones-sq.webp src/suzy-headphones-sq-graded.webp
# The source runs magenta-red on face and hands (hue ~8 vs natural ~16-20) with a yellow
# ceiling; this fixes both, then levels, midtone lift, gentle contrast and light vibrance.
import sys
import numpy as np
from PIL import Image

src, out = sys.argv[1], sys.argv[2]
a = np.asarray(Image.open(src).convert('RGB')).astype(np.float64) / 255.0

def hsv_bits(x):
    mx, mn = x.max(2), x.min(2)
    sat = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = x[..., 0], x[..., 1], x[..., 2]
    hue = np.degrees(np.arctan2(np.sqrt(3) * (g - b), 2 * r - g - b)) % 360
    return sat, hue

def band(hue, centre, width):
    d = ((hue - centre + 180) % 360) - 180
    return np.exp(-(d ** 2) / (2 * width ** 2))

# 1. levels: stretch 0.3/99.7 percentiles of luma to full range
luma = a @ np.array([0.2126, 0.7152, 0.0722])
lo, hi = np.percentile(luma, [0.3, 99.7])
a = np.clip((a - lo) / (hi - lo), 0, 1)

sat, hue = hsv_bits(a)
g = a.mean(2, keepdims=True)

# 2. yellow cast on the ceiling and walls (hue ~48, low sat): pull toward grey.
#    Skin sits at hue 8-19, so this band does not reach it.
w = 0.7 * band(hue, 48, 12) * np.clip((0.32 - sat) / 0.12, 0, 1)
a = a + w[..., None] * (g - a)

# 3. face and hands run magenta-red (hue ~8, chest is a natural ~19). Rotate that band
#    toward ~16 by lifting green a little; saturation is kept.
m = band(hue, 6, 7) * np.clip((sat - 0.15) / 0.08, 0, 1)
a[..., 1] += 0.17 * m * (a[..., 0] - a[..., 1])
a[..., 2] -= 0.01 * m

# 4. midtone lift then a gentle S-curve for contrast
a = np.clip(a, 0, 1) ** 0.9
a = np.clip(a + 0.25 * (a - 0.5) * (1 - np.abs(2 * a - 1)), 0, 1)

# 5. light vibrance (headphones, lights), less on skin
sat, hue = hsv_bits(a)
g = a.mean(2, keepdims=True)
skin = band(hue, 14, 12)
boost = 1 + 0.18 * (1 - sat) * (1 - 0.7 * skin)
a = np.clip(g + (a - g) * boost[..., None], 0, 1)

Image.fromarray((a * 255 + 0.5).astype(np.uint8)).save(out, quality=92)
