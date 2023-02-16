window.addEventListener("load", solve);

function solve() {
    let create = {
        li: () => document.createElement('li'),
        ul: () => document.createElement('ul'),
        div: () => document.createElement('div'),
        span: () => document.createElement('span'),
        td: () => document.createElement('td'),
        tr: () => document.createElement('tr'),
        strong: () => document.createElement('strong'),
        button: () => document.createElement('button'),
    }
    
    let makeElementField = document.getElementById('make');
    let modelElementField = document.getElementById('model');
    let yearElementField = document.getElementById('year');
    let fuelelementField = document.getElementById('fuel');
    let originalCostField = document.getElementById('original-cost');
    let sellingPriceField = document.getElementById('selling-price');

    let tableBodyField = document.getElementById('table-body');

    let publishButton = document.getElementById('publish');
    publishButton.addEventListener('click', publishOffer);

    let profit = 0;

    function publishOffer(event){
        event.preventDefault();

        let make = makeElementField.value;
        let model = modelElementField.value;
        let year = yearElementField.value;
        let fuel = fuelelementField.value;
        let originalCost = originalCostField.value;
        let sellingPrice = sellingPriceField.value;

        if(make == ''
        || model == ''
        || year == ''
        || fuel == ''
        || originalCost == '' 
        || sellingPrice == ''
        || originalCost > sellingPrice
        ){
            return;
        }

        let tr = document.createElement('tr');
        tr.classList.add('row');

        let td1 = document.createElement('td');
        td1.textContent = make;
        tr.appendChild(td1);

        let td2 = create.td();
        td2.textContent = model;
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.textContent = year;
        tr.appendChild(td3);
        let td4 = document.createElement('td');
        td4.textContent = fuel;
        tr.appendChild(td4);
        let td5 = document.createElement('td');
        td5.textContent = originalCost;
        tr.appendChild(td5);
        let td6 = document.createElement('td');
        td6.textContent = sellingPrice;
        tr.appendChild(td6);
        let td7 = document.createElement('td');
        
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.classList.add('action-btn', 'edit');
        editButton.addEventListener('click', editOffer);
        td7.appendChild(editButton);

        let sellButton = document.createElement('button');
        sellButton.textContent = 'Sell';
        sellButton.classList.add('action-btn', 'sell');
        sellButton.addEventListener('click', sellCar);
        td7.appendChild(sellButton);

        tr.appendChild(td7);

        tableBodyField.appendChild(tr);

        makeElementField.value = '';
        modelElementField.value = '';
        yearElementField.value = '';
        fuelelementField.value = '';
        originalCostField.value = '';
        sellingPriceField.value = '';


        function editOffer(event){
            makeElementField.value = make;
            modelElementField.value = model; 
            yearElementField.value = year;
            fuelelementField.value = fuel;
            originalCostField.value = originalCost;
            sellingPriceField.value = sellingPrice;

            tableBodyField.removeChild(tr);

        }

        function sellCar(event){
            let ul = document.getElementById('cars-list');

            let li = document.createElement('li');
            li.classList.add('each-list');

            let span1 = document.createElement('span');
            span1.textContent = `${make} ${model}`;
            li.appendChild(span1);
            let span2 = document.createElement('span');
            span2.textContent = year;
            li.appendChild(span2);

            let span3 = document.createElement('span');
            let currentProfit = Number(sellingPrice) - Number(originalCost);
            span3.textContent = currentProfit;
            li.appendChild(span3);

            profit += Number(currentProfit);

            ul.appendChild(li);

            let profitElement = document.getElementById('profit');
            profitElement.textContent = profit.toFixed(2);

            tableBodyField.removeChild(tr);
        }
    }
}


