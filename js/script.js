function exp(num, degree = 1){
    if(num === null || num.trim() === `` || isNaN(+num))   return alert(`some error`);
    if(degree === null || degree.trim() === `` || isNaN(+degree))   return alert(`some error`);
    return alert(Math.pow(+num, +degree));
}
exp(prompt(`Введите число`), prompt(`Введите степень`));



