function solve(year, month, day){
    const currentDate = new Date(year, month - 1, day);
    const previousDate = new Date (currentDate.setDate(currentDate.getDate() - 1));

    const resultYear = previousDate.getFullYear();
    const resultMonth = previousDate.getMonth() + 1;
    const resultDay = previousDate.getDate();

    console.log(`${resultYear}-${resultMonth}-${resultDay}`);
}


solve(2016, 9, 30);
solve(2015, 5, 10);
