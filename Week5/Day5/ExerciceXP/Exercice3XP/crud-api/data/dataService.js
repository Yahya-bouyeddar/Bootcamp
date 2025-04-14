import axios from "axios";
export async function fetchPosts() {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
        
    }
    catch(erreur){
        console.error('Erreur lors de la récupération des posts :', error);
    }
}
    