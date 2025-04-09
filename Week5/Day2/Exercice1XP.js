async function getData(){
   try{
    const response = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    if(!response.ok){
        throw new Error(`Erreur HTTP : ${response.status}`)
    }
    const data = await response.json()
    console.log("Résultat complet de l'API :", Object.keys(data).length)
   } 
   catch(error){
    console.error("Une erreur s'est produite :", error.message);


   }
    
    
    
}
getData()