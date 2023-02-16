class Triathlon{
    constructor(competitionName){
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender){
        if(!this.participants.hasOwnProperty(participantName)){
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`
        }

        return `${participantName} has already been added to the list`
    }

    completeness (participantName, condition){
        if(!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`)
        }

        let currentCondition = Math.floor(condition / 30);

        if(currentCondition < 1){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }else if(currentCondition <= 2){
            return `${participantName} could only complete ${currentCondition} of the disciplines`;
        }else{
            let currentFinalist = {};
            currentFinalist[participantName] = this.participants[participantName];
            delete this.participants.participantName;
            this.listOfFinalists.push(currentFinalist);
            return `Congratulations, ${participantName} finished the whole competition`
        }
    }

    rewarding (participantName){
        for (const finallist of this.listOfFinalists) {
            if(finallist.hasOwnProperty(participantName)){
                return `${participantName} was rewarded with a trophy for his performance`;
            }
        }
        return `${participantName} is not in the current finalists list`;
    }

    showRecord (criteria){
        if(this.listOfFinalists.length == 0){
            return `There are no finalists in this competition`;
        }

        if(criteria == 'male' || criteria == 'female'){
            for (const finallist of this.listOfFinalists) {
                let currentGender = Object.entries(finallist)[0];
                if(currentGender[1] == criteria){
                    return `${currentGender[0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            }
            return `There are no ${criteria}'s that finished the competition`
        }else{
            let resultArr = [`List of all ${this.competitionName} finalists:`];
            let sortedArr = [];
            for (const finallist of this.listOfFinalists) {
                let currentFinallist = Object.keys(finallist)[0];
                let currentGender = Object.values(finallist)[0];
                sortedArr.push([currentFinallist, currentGender]);
            }
            // console.log(sortedArr);
            sortedArr.sort((a, b) => a[0].localeCompare(b[0]));
            for (const person of sortedArr) {
                resultArr.push(`${person[0]}`);
            }
            return resultArr.join('\n');
        }
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon
