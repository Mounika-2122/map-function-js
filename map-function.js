const numbers=[3,4,5,6,7];
const multiplication=numbers.map(mul);
function mul(num){
    return num*10;
}
console.log(multiplication);