import sharp from 'sharp';
import { readFileSync } from 'fs';

const input = readFileSync('public/favicon.png');
await sharp(input)
  .resize(32, 32)
  .toFile('public/favicon.ico');

console.log('Favicon gerado com sucesso!');
