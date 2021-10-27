function exp(num, degree = 1){
    if(typeof(+num) !== `number` || isNaN(+num) || num === null || num.trim() === ``)   return alert(`some error`);
    if(typeof(+degree) !== `number` || isNaN(+degree) || degree === null || degree.trim() === ``)   return alert(`some error`);
    return alert(Math.pow(+num, +degree));
}
exp(prompt(`Введите число`),prompt(`Введите степень`));



