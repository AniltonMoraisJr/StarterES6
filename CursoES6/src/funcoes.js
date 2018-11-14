/* export const somaFuncoes = (a,b) => a + b;
export const subFuncoes = (...params) => params.reduce((total, next) => total - next);  */
const somaFuncoes = (a,b) => a + b;
const subFuncoes = (...params) => params.reduce((total, next) => total - next);


module.exports = {
    somaFuncoes,
    subFuncoes
    
}