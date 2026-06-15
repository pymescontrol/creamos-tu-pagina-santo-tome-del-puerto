import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'favicon.svg'));

async function generateIcons() {
  const publicDir = path.join(process.cwd(), 'public');
  
  try {
    // Generar pngs
    await sharp(svgBuffer).resize(48, 48).toFile(path.join(publicDir, 'favicon-48x48.png'));
    await sharp(svgBuffer).resize(192, 192).toFile(path.join(publicDir, 'favicon-192x192.png'));
    await sharp(svgBuffer).resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
    
    // Generar og-image (1200x630, logo centrado)
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 8, g: 12, b: 18, alpha: 1 } // #080C12
      }
    })
    .composite([
      { input: await sharp(svgBuffer).resize(300, 300).toBuffer(), gravity: 'center' }
    ])
    .toFile(path.join(publicDir, 'og-image.png'));

    console.log('Iconos generados exitosamente.');
  } catch (error) {
    console.error('Error generando iconos:', error);
  }
}

generateIcons();
