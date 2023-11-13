/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 
  (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.round(Math.random() * 20);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti 
  proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Milena",
  surname: "Jocic",
  age: 26,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto 
  precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente 
  creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto 
  nell'oggetto "me".
*/

me.skills.push("JS");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array 
  "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.ceil(Math.random() * 6);
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri 
  e ritorna il maggiore dei due.
*/

function whoIsBigger(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};
console.log(whoIsBigger(3, 6));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro 
  e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  return str.split(" ");
};
console.log(splitMe("I love coding"));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa 
  senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, bool) {
  if (bool === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};

console.log(deleteOne("ciao", true));
console.log(deleteOne("ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro 
  e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  let sostituzione = str.replace(/[0-9]/g, "");
  return sostituzione.split("  ").join(" ");
};
console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro 
  e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) {
  if (str.includes("@") && (str.includes(".it") || str.includes(".com") || str.includes(".org"))) {
    return true;
  } else {
    return false;
  }
};
console.log(isThisAnEmail("questo è un testo"));
console.log(isThisAnEmail("email@esempio.it"));
console.log(isThisAnEmail("email@esempio.com"));
console.log(isThisAnEmail("email@esempio.org"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  let days = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato", "domenica"];
  let today = new Date();
  let dayIn = today.getDay();
  return days[dayIn - 1];
};

console.log("Oggi è: " + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato 
  nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti 
  con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", 
  contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n) {
  let obj = {
    sum: 0,
    values: [],
  }

  for (let i = 0; i < n; i++) {
    let num = dice();
    obj.sum += num;
    obj.values.push(num);
  }
  return obj;
};

console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro 
  e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  let date = Date.parse(data);
  let now = new Date();
  let nowMs = now.getTime();
  let msTot = Math.abs(nowMs - date);
  let days = Math.floor(msTot / 1000 / 60 / 60 / 24);
  return days;
};

console.log(howManyDays("2021-11-13"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true 
  se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  if (month === 8 && day === 30) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday());


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come 
  parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà 
  chiamata come la stringa passata come secondo parametro.
*/

let obj = {
  str1: "Tizio",
  str2: "Caio",
  str3: "Sempronio",
};

function deleteProp(obj, str3) {
  delete obj[str3];
  return obj;
};

console.log(deleteProp(obj, "str3"));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente 
  nell'array "movies" fornito.
*/

let newestMovie = (array) => {

  let result = { Year: 0 }

  array.forEach((film) => {
    let currentYear = +(film.Year)
    if (currentYear > result.Year) {
      result = film
    }
  })
  return result;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti 
  nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
};

console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente 
  gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

let onlyYears = [];

function onlyTheYears() {
  for (let i = 0; i < movies.length; i++) {
    onlyYears.push(movies[i].Year)
  } return onlyYears;
};

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente 
  i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  let onlyLastMillennium = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year < 2000) {
      onlyLastMillennium.push(movies[i])
    }
  } return onlyLastMillennium;
};

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli 
  anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let sum = 0;
  for (let i = 0; i < onlyYears.length; i++) {
    sum += +(onlyYears[i]);
  } return sum;
};

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro 
  e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str) {
  let result = [];
  movies.forEach((film) => {
    if (film.Title.toLowerCase().includes(str.toLowerCase())) {
      result.push(film.Title);
    }
  });
  return result;
};

console.log(searchByTitle("Lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro 
  e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono 
  la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve 
  includere tutti i rimanenti.
*/

function searchAndDivide(str) {
  let obj1 = {
    match: [],
    unmatch: [],
  }
  movies.forEach((film) => {
    if (film.Title.toLowerCase().includes(str.toLowerCase())) {
      obj1.match.push(film.Title);
    } else {
      obj1.unmatch.push(film.Title);
    }
  });
  return obj1;
};

console.log(searchAndDivide("Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro 
  e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta 
  come parametro.
*/

function removeIndex(n) {
  movies.splice(n, 1)
  return movies;
};

console.log(removeIndex(13));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id 
  "container" all'interno della pagina.
*/

let container = document.querySelector("#container");
console.log(container);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

let cella = document.querySelectorAll("table td");
console.log(cella);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console 
  il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function tdText() {
  for (let i = 0; i < cella.length; i++) {
    console.log(cella[i].textContent)
  }
};

tdText();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore 
  rosso a ogni link all'interno della pagina.
*/

function redBackground() {
  let links = document.querySelectorAll("a")
  links.forEach(function (link) {
    link.style.backgroundColor = "red";
  })
};

redBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla 
  lista non ordinata con id "myList".
*/

function addElement() {
  let ul = document.querySelector("#myList");
  let li = document.createElement("li");
  li.innerText = "Elemento aggiunto tramite JS";
  ul.appendChild(li);
};

addElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLista() {
  let li = document.querySelectorAll("#myList li");
  li.forEach(function (li) {
    li.remove();
  })
};

svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClass() {
  let tr = document.querySelectorAll("table tr");
  tr.forEach(function (tr) {
    tr.classList = "test";
  })
};

addClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro 
  e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row)
  }
};

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro 
  e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(n) {
  for (let i = 0; i <= n; i++) {
    let row = ""
    for (let j = 0; j < n - i; j++) {
      row += " "
    }
    for (let y = 0; y < i; y++) {
      row += " *"
    }
    console.log(row)
  }
};

tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero 
  come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isItPrime(2));
console.log(isItPrime(17));
console.log(isItPrime(6));
console.log(isItPrime(20));