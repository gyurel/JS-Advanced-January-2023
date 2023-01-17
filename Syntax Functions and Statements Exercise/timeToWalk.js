function solve(steps, footprint, speed){

    let distanceMeters = steps * footprint;
    let distanceKm = steps * footprint /1000;

    let oneMinuteBreaks = Math.floor(distanceMeters / 500);

    let timeHours = distanceKm / speed + oneMinuteBreaks / 60;
    let hours = Math.floor(timeHours);
    let minutesNotRounded = (timeHours % 1) * 60
    let minutes = Math.floor((timeHours % 1) * 60);
    let seconds = Math.ceil((minutesNotRounded % 1) * 60);

    console.log(`${hours < 10 ? '0': ''}${hours}:${minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`);
}


solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);
