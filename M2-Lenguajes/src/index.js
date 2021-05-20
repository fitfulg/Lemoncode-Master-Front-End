// 1. Array operations
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Uliza destructuring.

const head = ([first, ...rest]) => first;

const arr1 = [1, 2, 3];

console.log(`1.-Array Head of [${arr1}] is: [${head(arr1)}]`);  //[1]

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Uliza rest operator.
const tail = ([first, ...rest]) => rest;

const arr2 = [1, 2, 3];

console.log(`1.-Array Tail of [${arr2}] is: [${tail(arr2)}]`); //[2,3]

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el úlmo. Uliza los métodos que ofrece
// Array.prototype.
const init = ([...arr]) => {
    arr.pop();
    return arr;

};

const arr3 = [1, 2, 3];

console.log(`1.-Array Init of [${arr3}] is: [${init(arr3)}]`); //[1,2]

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el úlmo elemento.
const last = ([...array]) => array[array.length - 1];

const arr4 = [1, 2, 3];

console.log(`1.-Array Last of [${arr4}] is: [${last(arr4)}]`); //[3]

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Uliza rest / spread operators.
const concat = (a, b) => {
    const newArray = [...a, ...b];
    return newArray;
};

const arr5 = [1, 2, 3];
const arr6 = ["uno", "dos", "tres"];

console.log(`2.-Concat of [${arr5}]+[${arr6}]= [${concat(arr5, arr6)}]`);  //[1,2,3,uno,dos,tres]

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múlples arrays de
// entrada (más de 2).
const concatMore = (...args) => {
    const newArray = [].concat(...args);
    return newArray;
};

const arr7 = [false, true];
console.log(`2.-Concat of [${arr5}]+[${arr6}]+[${arr7}]= [${concatMore(arr5, arr6, arr7)}]`); //[1,2,3,uno,dos,tres,false,true]

// 3. Clone Merge
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
const source = {
    name: "Eric",
    age: 34,
    type: "human"
}

function clone(source) {
    const properties = Object.keys({...source })
    return properties
}

console.log(`3.-Properties of ${JSON.stringify(source)} are: ${clone(source)}`);  //name,age,type

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target ,
// devuelva un nuevo objeto con todas las propiedades de target y de source , y en caso
// de propiedades con el mismo nombre, source sobreescribe a target .

const target = {
    name: "Dakota",
    age: 2,
    type: "animal",
    color: "white"
}

const merge = (source, target) => {
    const newObj = {...target, ...source }
    return newObj;
}

//   merge(source, target)
console.log("3.-Merged new object is: ", merge(source, target)); //{ name: 'Eric', age: 34, type: 'human', color: 'white' }

// 4. Read Books
// (ver archivo ejercicio4.ts)


// 5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde
// cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
// tendrá un contador de monedas que automáticamente se irá incrementando conforme
// vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma
// automática y debe generar tres booleanos aleatorios que representarán el estado de las
// 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por
// tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la
// máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".

class SlothMachine {
    constructor(counter) {
        this.counter = counter
    }


    play() {
        this.counter++;

        const boolCase1 = Math.random() >= 0.5;
        const boolCase2 = Math.random() >= 0.5;
        const boolCase3 = Math.random() >= 0.5;

        if (boolCase1 === boolCase2 && boolCase1 === boolCase3) {
            console.log(`Congratulations!!! You won ${this.counter} coins!!`)
            this.counter = 0
        } else {
            console.log('Good luck next time!!')
        }
    }

}
const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"