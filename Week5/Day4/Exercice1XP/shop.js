const products = require('./products.js')


function searsh(nameProduct){
    return products.filter(product=> nameProduct == product.name)

}
console.log(searsh('iPhone 14'));
console.log(searsh('Samsung Galaxy S23'));
console.log(searsh('MacBook Air M2'));
console.log(searsh('Dell XPS 13'));


// console.log(products);
