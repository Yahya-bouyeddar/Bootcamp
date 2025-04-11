import fs from 'fs'
export function read(){
    fs.readFile('file-data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})}
read()