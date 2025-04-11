// import fs from "fs";
import fs from 'fs/promises';

async function copyFile() {
  try {
    const data = await fs.readFile('source.txt', 'utf8');
    await fs.writeFile('destination.txt', data);
    
    console.log('Écriture terminée avec succès !');
  } catch (err) {
    console.error('Erreur lors de la lecture ou de l\'écriture :', err);
  }
}

copyFile();

