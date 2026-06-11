"""Generate social preview / favicon images from the AFR Benefits logo.

Run: /opt/homebrew/bin/python3.11 scripts/generate-social-images.py
"""
from PIL import Image

LOGO = "src/afr-benefits-logo.png"
OUT = "public"

logo = Image.open(LOGO).convert("RGBA")


def fit(img, max_w, max_h):
    ratio = min(max_w / img.width, max_h / img.height)
    return img.resize((round(img.width * ratio), round(img.height * ratio)), Image.LANCZOS)


def on_canvas(size, logo_img, bg=(255, 255, 255, 255)):
    canvas = Image.new("RGBA", size, bg)
    x = (size[0] - logo_img.width) // 2
    y = (size[1] - logo_img.height) // 2
    canvas.paste(logo_img, (x, y), logo_img)
    return canvas


# Open Graph / iMessage preview: 1200x630, logo centered on white
og = on_canvas((1200, 630), fit(logo, 1000, 530))
og.convert("RGB").save(f"{OUT}/og-image.png", optimize=True)

# Apple touch icon: 180x180 on white (iOS does not handle transparency well)
apple = on_canvas((180, 180), fit(logo, 150, 150))
apple.convert("RGB").save(f"{OUT}/apple-touch-icon.png", optimize=True)

# Favicons, transparent background
for px, name in [(48, "favicon.png"), (32, "favicon-32.png")]:
    icon = on_canvas((px, px), fit(logo, px, px), bg=(255, 255, 255, 0))
    icon.save(f"{OUT}/{name}", optimize=True)

print("done")
