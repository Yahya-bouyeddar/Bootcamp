let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () =>{
    groceries.fruits.forEach(fruit => {
    console.log(fruit)
})
} 

const cloneGroceries = () => {
    let user = client
    client = 'betty'
    console.log("client:", client); // Affiche "Betty"
    console.log("user:", user) 
    // Affiche toujours "John" (pas affecté par la modification de client)
    let shopping = groceries
    groceries.totalPrice = "35$"
    console.log(shopping);
    groceries.other.paid = false
    console.log(shopping);
    // il va changer car les objets pass par reference 

}

cloneGroceries()



    
