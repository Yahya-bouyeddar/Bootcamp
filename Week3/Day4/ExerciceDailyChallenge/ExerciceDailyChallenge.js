const libform = document.getElementById('libform')
const storyy = document.getElementById('story')
const aleatoire = document.getElementById('aleatoire')
libform.addEventListener('submit',function(event){
    event.preventDefault()

    let noun = document.getElementById('noun').value
    let adjective = document.getElementById('adjective').value
    let person = document.getElementById('person').value
    let verb = document.getElementById('verb').value
    let place = document.getElementById('place').value

    if(noun.value===''|| adjective.value==='' || person.value === '' || verb.value ==='' || place.value ===''){
        
        alert('vous avez oublier de remplir un champ !')
    }else{
        const story = `${person} est ${adjective} ${noun} qui veux ${verb} au ${place}.`;
        storyy.textContent = story
        userValues = { noun, adjective, person, verb, place };
    }
    
 

})


function randomStory(userValues){
    const {noun, adjective, person, verb, place} = userValues
    const stories = [
        `${person} est un ${adjective} ${noun} qui adore ${verb} à ${place}.`,
        `Un jour, ${person} a vu un ${noun} ${adjective} qui voulait ${verb} dans ${place}.`,
        `Tout le monde connaît ${person}, le ${adjective} ${noun} qui aime ${verb} à ${place}.`
    ];
    const randamStory = stories[Math.floor(Math.random()*3) ]
    storyy.textContent = randamStory
}
let count = 0
aleatoire.addEventListener('click',function(){

    count++

    if(count >=3){
        randomStory(userValues
        )
    }else{
        alert("cliquer 3 fois pour generer une autre histoire")
    }



})