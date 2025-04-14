import express from "express";
import { fetchPosts } from "./data/dataService.js";
const app = express()
app.listen(5000,()=>{
    console.log("server is listening on port 5000");
    
})
app.get('/posts',async (req,res)=>{

    try{
        const posts = await fetchPosts()
        console.log('Données récupérées avec succès'); 
        res.json(posts)
    }
    catch (error) {
        console.error('Erreur lors de la récupération des données', error); // Message d'erreur si la récupération échoue
        res.status(500).send('Erreur serveur');
      }

})
