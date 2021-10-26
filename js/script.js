function exp(num, degree = 1){
    if( num == false || isNaN(num))   return alert(`some error`);
    if (degree == false || isNaN(degree))  return alert(`some error`); 
    return alert(Math.pow(num, degree));
}
exp(+prompt(`Введите число`), +prompt(`Введите степень`));


