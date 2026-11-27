# Arte de compartilhamento

`share.html` gera `public/og/black-helmet-share.jpg` (1200x630), a imagem que aparece quando o link do site é enviado no WhatsApp, Instagram e afins.

Para regerar (Windows, Git Bash, na raiz do projeto):

```sh
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --screenshot="$PWD/og-share.png" "file:///$PWD/scripts/og/share.html"
python -c "from PIL import Image; Image.open('og-share.png').convert('RGB').save('public/og/black-helmet-share.jpg', quality=88, optimize=True, progressive=True)"
rm og-share.png
```
