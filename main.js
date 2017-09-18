//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, status, hungry) {
  this.name = name,
  this.status = status,
  this.hungry = hungry

}

let sadie = new Dog("sadie", "normal", false)
sadie.owner = "mason"
sadie.color = "black"
let moonshine = new Dog("moonshine", "normal", true)

let atticus = new Dog("atticus", "normal", true)

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.cool = cool
  this.name = name
  this.pet = function(dogName){
    return dogName.status = "happy"
  }
  this.feed = function(dogName){
    return dogName.hungry = false
  }

}

let mason = new Human("mason", false)
let julia = new Human("julia", true)



// Instances of Human
// Needed: mason, julia
