const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(number){
        this.energy -= number
        return `${this.energy}`
    },
    recoverEnergy: function(number){
        if (this.energy + number <=99){
        this.energy += number
        return `${this.energy}`}
    },
    loseLife: function(){
        if(!this.verifyLive()){
            console.log('Game Over!!')
        } else {
        this.lives -= 1
        return `${this.lives}`}
    },

    // Will come back to this

    }