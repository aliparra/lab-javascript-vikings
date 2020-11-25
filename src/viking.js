// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health= this.health - damage;

    }
}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength)
        this.name=name;
    }

    attack(){
    return super.attack();
    }

    receiveDamage(damage){
      super.receiveDamage(damage);
        
      if(this.health>0){
        return `${this.name} has received ${damage} points of damage`
      } 
        return `${this.name} has died in act of combat`
    }

    battleCry(){
        return `Odin Owns You All!`;
    }
}

/*const viking1= new Viking('Odin',100,100);
console.log(viking1.receiveDamage(100));
console.log(viking1.receiveDamage(95));*/


// Saxon
class Saxon extends Soldier {

    attack(){
        return super.attack();
    }

    receiveDamage(damage){
        this.health= this.health - damage;
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
          } 
            return `A Saxon has died in combat`
    }

}

// War
class War {}