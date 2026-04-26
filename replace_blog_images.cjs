const fs = require('fs');

const path = './src/lib/blog.ts';
let code = fs.readFileSync(path, 'utf8');

const images = [
  '/hero-luxembourg.jpg',
  '/hero-luxembourg-2.jpg',
  '/hero-luxembourg-3.jpg',
  '/hero-luxembourg-4.jpg',
  '/trail-1.jpg',
  '/trail-2.jpg',
  '/trail-3.jpg',
  '/trail-4.jpg',
  '/trail-5.jpg',
  '/mosel-cruise.jpg'
];

let imgIndex = 0;

// Since there are matched EN and NL translation keys, let's keep track of translationKey -> image
const keyToImage = {};

code = code.replace(/translationKey:\s*"([^"]+)",[\s\S]*?coverImage:\s*"([^"]+)"/g, (match, key, oldImage) => {
  if (!keyToImage[key]) {
      keyToImage[key] = images[imgIndex % images.length];
      imgIndex++;
  }
  const newImage = keyToImage[key];
  return match.replace(`coverImage: "${oldImage}"`, `coverImage: "${newImage}"`);
});

fs.writeFileSync(path, code, 'utf8');
console.log('Images replaced successfully');
