//hasId
/*
Implementa una función llamada hasId que admita como parámetro un objeto
y compruebe si dicho objeto tiene una propiedad llamada id 
(debe devolver booleano true/false).
*/
//TIP: No accedas a 'id' con punto (.) o con corchetes ([]).
console.log('===== hasID =====');
const userObject = {
    id: 1,
    name: 'Jesús',
}

const hasID = ({
    id: objectID
}) => objectID ? console.log(true) : console.log(false);

hasID(userObject);

//head
/*
Implementa una función llamada head tal que, dado un array como entrada,
devuelva el primer elemento.
*/
//TIP: No utilices el corchete ([]) para acceder a la posición 0.

console.log('===== head =====');

const arrayHead = ['Málaga', 'Córdoba', 'Sevilla', 'Granada'];

const head = ([first]) => first;
console.log(head(arrayHead));

//tail
/*
Implementa una función llamada tail tal que, 
dado un array como entrada, devuelva un nuevo array
con todos los elementos menos el primero.
*/
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

console.log('===== tail =====');

const arrayTailOriginal = ['tomate', 'lechuga', 'pimientos'];
const arrayTailCopy = ([, ...array]) => array;

console.log(arrayTailCopy(arrayTailOriginal));


//swapFirstToLast
/*
Implementa una función llamada swapFirstToLast tal que,
dado un array como entrada, devuelva un nuevo array donde 
el primer elemento ha sido colocado en la última posición.
*/
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

console.log('===== swapFirstToLast =====');

const arraySwap = ['tortilla', 'queso', 'jamón'];
const swapFirstToLast = ([firstItem, ...array]) => [...array, firstItem];

console.log(swapFirstToLast(arraySwap));


//excludeId
/*
Implementa una función llamada excludeId tal que, 
dado un objeto como entrada, devuelva dicho objeto clonado 
excepto la propiedad id si la hubiera.
*/
//TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.

console.log('===== excludeId =====');

const excludeObject = {
    id: 125,
    name: 'Carmen'
}

const excludeId = ({
    id,
    ...object
}) => object

console.log(excludeId(excludeObject));


//wordsStartingWithA
/*
Implementa una función llamada wordsStartingWithA tal que, 
dado un array de palabras como entrada, devuelva otro array filtrado
con aquellas palabras que empiecen por a.
*/

//TIP: No utilices bucles.

console.log('===== wordsStartingWithA =====');

const arrayA = ['alabanza', 'pelota', 'ratón', 'alma', 'ordenador', 'árbitro'];

const wordsStartingWithA = array => array.filter(array => array.startsWith('a') || array.startsWith('á') === true);

console.log(wordsStartingWithA(arrayA));

//concat
/*
Implementa una función llamada concat tal que admita
 múltiples argumentos de tipo string y devuelva otro 
 string con la concatenación de todos, separados por |.
*/
//IP: No utilices bucles.

console.log('===== concat =====');

const concat = (...string) => string.join(" / ");

console.log(concat("hola", "esto", "son", "varios", "argumentos", "unidos"));

//multArray
/*
Implementa una función llamada multArray que admita
un array de números (arr) y otro parámetro que sea un número (x)
y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
*/
//TIP: No utilices bucles.

console.log('===== multArray =====');

const arrayNumber = [4, 2, 10, 5];

const multArray = (arr, x) => arr.map( arrElement => arrElement * x )


console.log(multArray(arrayNumber, 8));


//calcMult
/*
Implementa una función llamada calcMult 
que admita múltiples números como argumento 
y devuelva como resultado el producto de todos ellos.
*/

//TIP: No utilices bucles.


console.log('===== calcMult =====');

const calcMult = (...numbers) => numbers.reduce((accum, val) => accum * val, 1);

console.log(calcMult(2, 4, 5, 10, 22));