let user = prompt('Fakterial son kiriting')
let summa =1 
for (let i = 1; i <= user; i++) {
    summa = summa *i
    console.log(summa);
}
if (user === 0) {
    
} 
else{
    console.log('Bu son emas, iltimos son kiriting');
}