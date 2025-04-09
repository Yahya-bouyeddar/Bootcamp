async function getData(){
   try{
    const response = await fetch('https://api.giphy.com/v2/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    if(!response.ok){
        throw new Error(`Erreur HTTP : ${response.status}`)
    }
    const data = await response.json()
    console.log("Résultat complet de l'API :", data)
   } 
   catch(error){
    console.error("Une erreur s'est produite :", error.message);


   }
    
    
    
}
getData()