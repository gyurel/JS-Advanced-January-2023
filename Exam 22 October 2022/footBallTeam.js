class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName; 
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        let currentlyInvitedPlayers = [];

        for (const guest of footballPlayers) {
            const [name, currentAge, playerV] = guest.split("/");
            let age = Number(currentAge);
            let playerValue = Number(playerV);


            let found = false;

            for (const player of this.invitedPlayers) {
                if(player.name == guest.name){
                    found = true;
                    if(guest.playerValue > player.playerValue){
                        player.playerValue = guest.playerValue;
                    }
                }
            }

            if(!found){
                let currentGuest = {
                    'name': name,
                    'age': age,
                    'playerValue': playerValue,
                }

                this.invitedPlayers.push(currentGuest);
                currentlyInvitedPlayers.push(currentGuest);
            }
        }

        let startString = "You successfully invite "
        let resultArr = [];

        for (const guestPlayer of currentlyInvitedPlayers) {
            let currentName = guestPlayer.name;
            resultArr.push(currentName);
        }

        return startString + resultArr.join(', ') + '.';
    }

    signContract(selectedPlayer){
        let [name, offer] = selectedPlayer.split('/');
        let playerOffer = Number(offer);

        for (const invitedPlayer of this.invitedPlayers) {
            if(name == invitedPlayer.name){
                if(playerOffer >= invitedPlayer.playerValue){
                    invitedPlayer.playerValue = "Bought";
                    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
                }else{
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(invitedPlayer.playerValue - playerOffer)} million more are needed to sign the contract!`)
                }
            }
            
        }
        throw new Error(`${name} is not invited to the selection list!`)
    }

    ageLimit(name, age){
        for (const invitedPlayer of this.invitedPlayers) {
            if(name == invitedPlayer.name){
                if(invitedPlayer.age < age){
                    let difference = age - invitedPlayer.age;
                    if(difference > 5){
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }else if(difference < 5){
                        return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
                    
                    }
                }else{
                        return `${name} is above age limit!`
                }
            }
        }
        throw new Error(`${name} is not invited to the selection list!`)
    }

    transferWindowResult(){
        let resultArr = ["Players list:"];

        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        let newString = '';

        for (const player of sortedPlayers) {
            let currentStr = `Player ${player.name}-${player.playerValue}`;
            resultArr.push(currentStr);
        }
        return resultArr.join('\n');
    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52
