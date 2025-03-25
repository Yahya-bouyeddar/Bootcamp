const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// console.log(prices.banana);

shoppingList = ["banana", "orange", "apple"]

function myBill() {
    
let price = 0
    for(i=0 ; i< shoppingList.length ; i++){
        
        if( shoppingList[i] in stock && stock[shoppingList[i]]>0 ){
            
            
            
            price += prices[shoppingList[i]]
            stock[shoppingList[i]]--
            
            

        }
        
        
    }
    
    console.log(price);
    console.log(stock);
    

}
myBill()