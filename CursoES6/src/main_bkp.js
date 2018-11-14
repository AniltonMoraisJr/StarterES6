// REST

const usuario = {
    nome: "Anilton",
    idade: 23,
    empresa: "Betta"
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

const soma = (...params) => {
    return params.reduce( (total, next) => total + next );
}

console.log(soma(1,3,4));

//SPREAD 

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
    nome: "Anilton",
    idade: 25,
    empresa: "Betta"
};

const usuario2 = {...usuario1, nome: "Anilton Jr" };

console.log(usuario2);

/**
 * Template literals
 */

const nome1 = "Anilton";
const idade1 = 25;

console.log(`Meu nome é ${nome1} e tenho ${idade1} anos.`);

/**
 * Object sort syntax
 */

 const nome2 = "Diego";
 const idade2 = 25;

 const usuario3 = {
     nome2,
     idade2,
     empresa: "Rocketseat"
 };

 console.log(usuario3);

 /**
  * Webpack
  */
import funcoes from './funcoes';
import { resolve } from 'url';

console.log(funcoes.somaFuncoes(1,2));
console.log(funcoes.subFuncoes(2,1,4,5));

console.log("Anilton Jr");

/**
 * Async/Await
 */

 const minhaPromisse = () => new Promise((resolve, reject) => {
     setTimeout(() => resolve('Ok'), 2000);
 });

 /* minhaPromisse().then(response => {
     console.log(response);
 }); */

 const executaPromise = async() => {
     console.log(await minhaPromisse());
     console.log(await minhaPromisse());
     console.log(await minhaPromisse());
 };

 executaPromise();

 