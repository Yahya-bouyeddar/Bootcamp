// 2) En utilisant Javascript, dans le <div>, changez la valeur de l'attribut id de navBar à socialNetworkNavigation , en utilisant la setAttributeméthode.
const navBar = document.getElementById('navBar')

navBar.setAttribute('id','socialNetworkNavigation ')


// 3)Nous allons ajouter un nouveau <li>au <ul>.
// 3-1)Tout d’abord, créez une nouvelle <li>balise (utilisez la createElementméthode).



const newLi = document.createElement('li')


// 3-2)Créez un nouveau nœud de texte avec « Déconnexion » comme texte spécifié.
// Créer un nouveau nœud de texte avec le texte "Logout"

const textNode = document.createTextNode('Logout');

// 3-3) Ajoutez le nœud de texte au nœud de liste nouvellement créé ( <li>).

newLi.appendChild(textNode) 

// 3-)Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChildméthode.

const ul = document.getElementsByTagName('ul')[0]
ul.appendChild(newLi)




const firstLi = ul.firstElementChild;
console.log('Premier <li> texte:', firstLi.textContent);

const lastLi = ul.lastElementChild;
console.log('Dernier <li> texte:', lastLi.textContent);
