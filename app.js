const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


/* Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console.*/

const longBooks = books.filter(b => b.pages > 300);
console.log(longBooks);

const longBooksTitles = longBooks.map(b => b.title);
console.log(longBooksTitles);

longBooksTitles.forEach(t => console.log(t));


/* Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).*/

const availableBooks = books.filter(b => b.available === true);
console.log(availableBooks);

const discountedBooks = availableBooks.map(b => {
    let priceParsed = parseFloat(b.price.replace('€', ''));
    console.log(priceParsed);
    let discountedPrice = priceParsed - (priceParsed * 20 / 100);
    return {
        ...b,
        price: `${discountedPrice.toFixed(2)}€`
    };
});

console.log(discountedBooks);

const fullPricedBook = discountedBooks.find(el => {
    let priceParsed = parseFloat(el.price.replace('€', ''));
    return priceParsed % 1 === 0; //Number.isInteger(priceParsed)
});
console.log(fullPricedBook);


/* Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */


const authors = books.map(b => b.author);
console.log(authors);

const areAuthorsAdult = authors.every(a => a.age >= 18);
console.log((areAuthorsAdult)); //false

authors.sort((a, b) => (a.age - b.age) * (areAuthorsAdult ? 1 : -1));


/* Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri.
 */

const ages = authors.map(a => a.age);
console.log(ages);

const agesSum = ages.reduce((acc, curr) => {

    return acc + curr
}, 0);

console.log(agesSum);
const mediaEta = agesSum / authors.length;
console.log(mediaEta);

/* Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
Testala con l’array [2, 13, 7, 21, 19] . */

async function getBooks(ids) {
    let url = `http://localhost:3333/books/`;

    const fetches = ids.map(id => fetch(`${url}${id}`).then(res => res.json()));

    const books = await Promise.all(fetches);
    return books;
}

(async () => {
    const result = getBooks([2, 13, 7, 21, 19]);
    console.log(result)
})()


/* Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array. */

const areThereAvailableBooks = books.some(b => b.available === true);
console.log(areThereAvailableBooks);

const booksByPrice = books.sort((a, b) => {
    let aParsed = parseFloat(a.price);
    let bParsed = parseFloat(b.price);

    return aParsed - bParsed;
});
console.log(booksByPrice);

booksByPrice.sort((a, b) => {
    return (b.available === true) - (a.available === true)
})
console.log(booksByPrice)

/* Usa reduce per creare un oggetto (tagCounts) che conta quante volte ogni tag viene usato tra i libri. */

const tagCounts = books.reduce((acc, curr) => {
    curr.tags.forEach(tag => {
        if (acc[tag]) {
            acc[tag] += 1;
        } else {
            acc[tag] = 1;
        }
    });
    return acc;
}, {})

console.log(tagCounts);