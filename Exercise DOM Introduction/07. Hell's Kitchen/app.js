function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let inputArr = JSON.parse(document.querySelector('#inputs>textarea').value);
      let bestRestaurantTag = document.querySelector('#bestRestaurant>p');
      let workersTag = document.querySelector('#workers>p');


      let currentBestAverage = 0;
      let currentBestRestaurant = '';

      let restaurantsRegister = {};
      
      for (const restaurantStr of inputArr) {
         let restaurantName = restaurantStr.split(' - ')[0];
         let workers = restaurantStr.split(' - ')[1].split(', ');

         let currentSalarySum = 0;

         workers
         .forEach((element) => {
            let [currentWorker, currentSalary] = element.split(' ');
            currentSalarySum += Number(currentSalary);
            if(restaurantsRegister[restaurantName]){
               restaurantsRegister[restaurantName][currentWorker] = Number(currentSalary);
            }else{
               restaurantsRegister[restaurantName] = {};
               restaurantsRegister[restaurantName][currentWorker] = Number(currentSalary);
            }
         });
         

         if(currentSalarySum / workers.length > currentBestAverage){
            currentBestAverage = currentSalarySum / workers.length;
            currentBestRestaurant = restaurantName;
         }
      }
      
      let workersArr = []
      for (const worker of Object.entries(restaurantsRegister[currentBestRestaurant])) {
         let currentObj = {};
         currentObj[worker[0]] = worker[1];
         workersArr.push(currentObj);
      }

      let sortedWorkersArr = workersArr.sort((e1, e2) => Object.values(e2)[0] - Object.values(e1)[0]);
      
      let firstString = `Name: ${currentBestRestaurant} Average Salary: ${currentBestAverage.toFixed(2)} Best Salary: ${Object.values(sortedWorkersArr[0])[0].toFixed(2)}`;
      let secondStringArr = [];
      
      for (const worker of sortedWorkersArr) {
         let currentWorker = Object.entries(worker);
         debugger
         let current = `Name: ${currentWorker[0][0]} With Salary: ${currentWorker[0][1]}`;
         secondStringArr.push(current);
      }
      
      let secondString = secondStringArr.join(' ');
      // debugger
      
      bestRestaurantTag.textContent = firstString;
      workersTag.textContent = secondString;
   }
}

// ["PizzaHut - Peter 500, George 300, Mark 800",
// "TheLake - Bob 1300, Joe 780, Jane 660"]
