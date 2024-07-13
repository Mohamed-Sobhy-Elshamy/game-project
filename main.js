
// Function contructor 
function Character(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;

    this.attackBtn = document.querySelector(`.${this.name}-attack`)
    this.healthBtn = document.querySelector(`.${this.name}-make-health`)
    this.progress = document.querySelector(`.${this.name}-health span`)
    this.alive = document.querySelector(`#${this.name}-alive`)
}

// Method attack
Character.prototype.attack = function(opponent) {
    // this = nartoo
    // opponent = sasakii
    
    if(opponent.health > 0) {
        opponent.health -= this.strength;
        opponent.progress.style.width = `${opponent.health}%`
    } else {
        opponent.attackBtn.remove()
        opponent.healthBtn.remove()
        opponent.alive.innerHTML = `${opponent.name} is Died`
    }
}

// Method status 
Character.prototype.status = function() {
    console.log(`Name: ${this.name}`)
    console.log(`strength: ${this.strength}`)
    console.log(`Health: ${this.health}`)
}

// Method Health 
Character.prototype.makeHealth = function() {
    if(this.health < 100) {
        this.health += 10;
        this.progress.style.width = `${this.health}%`
    }

    if(this.health > 100) {
        this.health = 100 
        this.progress.style.width = `${this.health}%`
    }
}

// create object
let nartoo = new Character('nartoo', 10, 100)
let sasakii = new Character('sasakii', 5, 100)


nartoo.attackBtn.addEventListener('click', function() {
    nartoo.attack(sasakii)
})

sasakii.attackBtn.addEventListener('click', function() {
    sasakii.attack(nartoo)
})

nartoo.healthBtn.addEventListener('click', function() {
    nartoo.makeHealth();
})

sasakii.healthBtn.addEventListener('click', function() {
    sasakii.makeHealth();
})