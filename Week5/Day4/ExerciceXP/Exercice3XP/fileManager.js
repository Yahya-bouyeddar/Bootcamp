
import fs from 'fs'

export function readFile (filePath){
    fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
export function writeFile(filePath,content){
    fs.writeFile(filePath, content, (err) => {
        if (err) {
          console.error('Erreur lors de l\'écriture :', err);
          return;
        }
        console.log('Écriture terminée avec succès !');
      });

}
