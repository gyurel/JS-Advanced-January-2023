function solve(inputString){
    let resultArray = []

    for (const hero of inputString) {
        let [name, level, items] = hero.split(' / ');
        let currentHero = {};
        currentHero['name'] = name;
        currentHero['level'] = Number(level);
        items = items ? items.split(', '): [];
        currentHero['items'] = items;
        resultArray.push(currentHero);
    }

    console.log(JSON.stringify(resultArray));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
