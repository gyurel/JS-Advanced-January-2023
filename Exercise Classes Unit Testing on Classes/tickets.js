function solve(ticketInfo, sortCriteria){
    let resultArr = [];
    

    for (const ticket of ticketInfo) {
        let [destination, price, status] = ticket.split('|');

        let currentTicket = {
            destination, 
            price: Number(price),
            status,
        }

        resultArr.push(currentTicket);
    }

    if(sortCriteria == 'price'){
        resultArr.sort((a, b) => a[sortCriteria] - b[sortCriteria]);
    }else{
        resultArr.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
    }

    return resultArr;
}

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)
