class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal (peak, altitude){
        if(this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`
    }

    hike (peak, time, difficultyLevel){
        if(!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals`);
        }

        if(this.resources == 0){
            throw new Error("You don't have enough resources to start the hike");
        }

        if(this.resources - time * 10 < 0){
            return "You don't have enough resources to complete the hike";
        }else{
            this.resources -= time * 10;
            let currentHike = {peak, time, difficultyLevel};
            this.listOfHikes.push(currentHike);
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest (time){
        if(this.resources + time * 10 >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }else{
            this.resources += time * 10;
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }

    showRecord (criteria){
        if(this.listOfHikes.length == 0){
            return `${this.username} has not done any hiking yet`
        }

        if(criteria == 'hard' || criteria == 'easy'){
            let currentList = [];
            for (const element of this.listOfHikes) {
                if(element.difficultyLevel == criteria){
                    currentList.push(element);
                }
            }
            if(currentList.length == 0){
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            currentList.sort((a, b) => b.time - a.time);
            return `${this.username}'s best ${criteria} hike is ${currentList[0].peak} peak, for ${currentList[0].time} hours`
        }else{
            let resultArr = ["All hiking records:"];
            for (const hike of this.listOfHikes) {
                resultArr.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)
            }

            return resultArr.join('\n');
        }
    }
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours
