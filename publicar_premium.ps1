# Script para publicar la versión Premium de la web
# Este script reemplaza la política minimalista por la landing page real y la sube a GitHub.

Write-Host "Cambiando a la versión PREMIUM..." -ForegroundColor Cyan

# 1. Reemplazar index.html por la versión premium
Copy-Item "index_premium.html" "index.html" -Force

# 2. Hacer commit y subir
git add index.html
git commit -m "Actualización: Lanzamiento de la versión Premium"
git push origin main

Write-Host "¡HECHO! Tu web premium ya está en vivo." -ForegroundColor Green
Pause
