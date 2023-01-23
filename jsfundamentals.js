let users = {}
users.name = "John",
users.surName= "Smith",
users.name = "Pete"
delete users.name ;

let schedule = {};

function isEmpty(obj) {
   for (let key in obj) {
      return false;
    }
    return true;
  }
console.log(isEmpty(schedule))

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
  for(let key in salaries){
    sum += salaries[key];
  }

console.log(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  }

  function multiplyMenu(obj) {
    for(let key in obj){
        if(typeof obj[key] === 'number'){
           
        }
        return obj[key] *=2;
    }
    
  }
console.log(multiplyMenu(menu))