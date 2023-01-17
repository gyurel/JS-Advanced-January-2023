function solve(speed, area){
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50, 
        'residential': 20,
    }

    switch (area) {
        case 'motorway':
            printFunc(speed, speedLimits.motorway);
            break;
        case 'interstate':
            printFunc(speed, speedLimits.interstate);
            break;
        case 'city':
            printFunc(speed, speedLimits.city);
            break;
        case 'residential':
            printFunc(speed, speedLimits.residential);
            break;
    }

    function printFunc (speed, limit){
        if (speed > limit){
            let difference = Math.abs(speed - limit);
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${getStatus(difference)}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        };
    };

    function getStatus(difference){
        if(difference <= 20){
            return 'speeding';
        } else if (difference <= 40){
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        };
    };
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
