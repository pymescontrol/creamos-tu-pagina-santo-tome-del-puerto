import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://pymescontrol.github.io/creamos-tu-pagina-santo-tome-del-puerto';

const routes = [
  {
    path: '/',
    title: 'Páginas web en Santo Tomé del Puerto | Daiaxme Web Studio',
    description: 'Diseño páginas web profesionales para negocios de Santo Tomé del Puerto, Riaza, Ayllón, Buitrago de Lozoya, Segovia y pueblos cercanos.',
    hasJsonLd: true
  },
  {
    path: '/servicios/',
    title: 'Diseño web para negocios locales | Daiaxme Web Studio',
    description: 'Webs modernas para bares, restaurantes, casas rurales, autónomos, tiendas y negocios locales que quieren transmitir confianza y facilitar el contacto.'
  },
  {
    path: '/webs-negocios/',
    title: 'Webs para negocios en Santo Tomé del Puerto y Riaza | Daiaxme',
    description: 'Creamos la página web de tu negocio local para atraer a clientes de toda la comarca. Diseño moderno, rápido y adaptado a móviles.'
  },
  {
    path: '/restaurantes-bares/',
    title: 'Webs para bares y restaurantes | Daiaxme Web Studio',
    description: 'Mejora la imagen de tu restaurante o bar con una página web profesional. Capta reservas y muestra tu carta a vecinos y turistas.'
  },
  {
    path: '/casas-rurales/',
    title: 'Diseño web para casas rurales | Daiaxme Web Studio',
    description: 'Páginas web para alojamientos y casas rurales en la Sierra. Atrae más huéspedes sin pagar altas comisiones a portales.'
  },
  {
    path: '/autonomos/',
    title: 'Webs para autónomos y servicios | Daiaxme Web Studio',
    description: 'Páginas web sencillas y eficaces para electricistas, fontaneros, talleres y otros profesionales de la zona que buscan más clientes.'
  },
  {
    path: '/proceso/',
    title: 'Mi proceso de diseño web | Daiaxme Web Studio',
    description: 'Descubre cómo trabajo paso a paso para crear la página web de tu negocio de forma transparente, rápida y sin complicaciones técnicas.'
  },
  {
    path: '/zona/',
    title: 'Diseño web en Santo Tomé del Puerto, Riaza y Ayllón',
    description: 'Daiaxme Web Studio trabaja desde Santo Tomé del Puerto para negocios de Riaza, Ayllón, Buitrago de Lozoya, Sierra Norte, Segovia y Aranda de Duero.'
  },
  {
    path: '/sobre-daiaxme/',
    title: 'Sobre Daiaxme Web Studio | Diseño web cercano',
    description: 'Conoce Daiaxme Web Studio. Ayudo a negocios de pueblo a tener una imagen digital fuerte, profesional y muy cuidada.'
  },
  {
    path: '/contacto/',
    title: 'Contacto | Daiaxme Web Studio',
    description: 'Contacta con Daiaxme Web Studio para crear una página web profesional para tu negocio local en Santo Tomé del Puerto y pueblos cercanos.'
  }
];

const jsonLd = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Daiaxme Web Studio",
      "description": "Páginas web profesionales para negocios locales desde Santo Tomé del Puerto, Segovia.",
      "areaServed": [
        "Santo Tomé del Puerto",
        "Riaza",
        "Ayllón",
        "Buitrago de Lozoya",
        "Sierra Norte de Madrid",
        "Sepúlveda",
        "Boceguillas",
        "Segovia",
        "Aranda de Duero"
      ]
    }
    </script>
`;

const docsDir = path.join(process.cwd(), 'docs');
const indexHtmlPath = path.join(docsDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('El archivo docs/index.html no existe. Compila primero con vite build.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

routes.forEach(route => {
  const isRoot = route.path === '/';
  const folderPath = isRoot ? docsDir : path.join(docsDir, route.path);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // Generar URL canonical
  const canonicalUrl = `${BASE_URL}${route.path}`;
  
  // Reemplazos de meta tags
  let newHtml = baseHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );
  
  newHtml = newHtml.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Añadir canonical y json-ld antes de cerrar </head>
  let headAdditions = `\n    <link rel="canonical" href="${canonicalUrl}" />`;
  if (route.hasJsonLd) {
    headAdditions += jsonLd;
  }
  
  newHtml = newHtml.replace('</head>', `${headAdditions}\n  </head>`);

  // Guardar archivo
  const outputPath = path.join(folderPath, 'index.html');
  fs.writeFileSync(outputPath, newHtml);
  console.log(`Generado: ${outputPath}`);
});

// Generar sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(docsDir, 'sitemap.xml'), sitemap);
console.log('Generado: docs/sitemap.xml');

// Generar robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml`;

fs.writeFileSync(path.join(docsDir, 'robots.txt'), robotsTxt);
console.log('Generado: docs/robots.txt');

// Generar .nojekyll
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
console.log('Generado: docs/.nojekyll');

console.log('Postbuild completado con éxito.');
