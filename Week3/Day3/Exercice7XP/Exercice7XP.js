// 1)
// 2)
// 3)

const allBooks = [
    {
        titre: "le dernier jour d'un condamné",
        auteur: "Victor Hugo",
        image: "https://www.darsoulami.ma/wp-content/uploads/2024/09/DAR-SOULAMI-AL-HADITA-9782072699917-LE-DERNIER-JOUR-DUN-CONDAMNE-FOLIO-CLASSIQUE.webp", 
        alreadyRead: true
    },
    {
        titre: "la boite a merveille",
        auteur: "ahmed safrioui",
        image: "https://m.media-amazon.com/images/I/51wfbHG7f1L._AC_UF1000,1000_QL80_.jpg", 
        alreadyRead: false
    }
]

// 4)
const listBooks = document.getElementsByClassName('listBooks')[0]

allBooks.forEach(book => {

    const bookDiv = document.createElement('div')
    const bookDetails = document.createElement('p')
    bookDetails.textContent = `${book.titre} ecris par ${book.auteur} `
    const bookImg = document.createElement('img')
    bookImg.src = book.image
    bookImg.style.width = '100px'

    if (book.alreadyRead ){
        bookDetails.style.color = 'red'
    }
    bookDiv.appendChild(bookDetails)
    bookDiv.appendChild(bookImg)

    
listBooks.appendChild(bookDiv)
});





