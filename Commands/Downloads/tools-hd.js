name: Procesar Imagen con Pixelcut

on:
  workflow_dispatch:
    inputs:
      image_url:
        description: 'URL de la imagen que se quiere mejorar'
        required: true
        type: string

jobs:
  upscale-background-removal:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repositorio
        uses: actions/checkout@v4

      - name: Configurar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'

      - name: Instalar dependencias
        run: npm install

      - name: Llamar API de Pixelcut: eliminar fondo
        id: remove_bg
        run: |
          response=(curl -s -X POST "https://api.developer.pixelcut.ai/v1/remove-background"             -H "Content-Type: application/json"             -H "X-API-KEY:{{ secrets.PIXELCUT_API_KEY }}" \
            -d "{\"image_url\": \"github.event.inputs.image_url ,̈f̈ormat:̈p̈ng")
          echo "result=response" >> GITHUB_OUTPUT

      - name: Llamar API de Pixelcut: mejorar imagen (upscale)
        id: upscale
        run: |
response2=(curl -s -X POST "https://api.developer.pixelcut.ai/v1/upscale" \
            -H "Content-Type: application/json" \
            -H "X-API-KEY: secrets.PIXELCUT_API_KEY "             -d "ïmage_url:̈$̈{{ github.event.inputs.image_url }}\", \"scale\": 2}")
          echo "result2=response2" >>GITHUB_OUTPUT

      - name: Mostrar resultados
        run: |
          echo "Fondo removido: steps.remove_bg.outputs.result "
          echo "Imagen mejorada:{{ steps.upscale.outputs.result2 }}"