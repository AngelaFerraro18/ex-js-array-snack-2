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


/* Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).*/

const availableBooks = books.filter(b => b.available === true);
console.log(availableBooks);

const discountedBooks = availableBooks.map(b => {
    let priceParsed = parseFloat(b.price);
    console.log(priceParsed);
    let discountedPrice = priceParsed - (priceParsed * 20 / 100);
    return {
        ...b,
        price: parseFloat(discountedPrice.toFixed(2))
    };
});

console.log(discountedBooks);

const integerPrice = discountedBooks.find(el => Number.isInteger(el.price));
console.log(integerPrice);


/* Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente) */


const authors = books.map(b => b.author);
console.log(authors);

const areAuthorsAdult = authors.every(a => a.age > 18);
console.log((areAuthorsAdult)); //false

authors.sort((a, b) => b.age - a.age);


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