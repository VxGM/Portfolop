# Victor Banchón — Portfolio

Sitio estático sin dependencias: HTML, CSS y JS. Bilingüe (ES/EN) con toggle en la barra superior.

## Archivos

- `index.html`: contenido. Los textos bilingües viven en atributos `data-es` / `data-en`.
- `styles.css`: diseño. Tokens OKLCH arriba del todo.
- `app.js`: toggle de idioma (persiste en localStorage) y scroll reveal con IntersectionObserver.

## Publicar en GitHub Pages

1. Crear un repo llamado `portfolio` en GitHub (o renombrar este repo a `VxGM.github.io` para el dominio raíz).
2. Empujar la rama `main`.
3. Settings → Pages → Source: Deploy from a branch → main / root.
4. Live en `https://vxgm.github.io/portfolio` (o `https://vxgm.github.io`).

Para un dominio propio (por ejemplo codidevs.com): Settings → Pages → Custom domain.
