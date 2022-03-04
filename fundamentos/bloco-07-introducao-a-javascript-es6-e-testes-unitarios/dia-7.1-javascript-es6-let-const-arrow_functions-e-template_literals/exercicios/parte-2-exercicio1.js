
const fatorial = (number) => {
    let result = number;
    for (let index = number; index > 1; index -= 1) {
        result = result * (index - 1); 
    }
    return result;
}

 console.log(fatorial(4));

 const fatorial = (number) => number === 0 ? 1 : number * fatorial(number - 1);
 console.log(fatorial(4));