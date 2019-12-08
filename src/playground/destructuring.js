//OBJECT DESTRUCTURING



/* const person = {
  name: 'Anton',

  age: 30,
  location: {
    city: 'Reutov',
    temp: -30

  }
}

//const name = person.name;
//const age = person.age;

//Looking from NAME and AGE from PERSON object
const { name: firstname = "Anonymus", age } = person; //default value

console.log(`${firstname} is ${age}`);

const { temp: temp1, city } = person.location;


if (person.location.city && person.location.temp) {
  console.log(`It is ${person.location.temp} in ${person.location.city}`)
}

if (city && temp1) {
  console.log(`It is ${temp1} in ${city}`)
} */


/* const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Hall',
  publisher: {
    name: 'Penhuin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);
 */




//ARRAY DESTRUCTURING


/* const address = ['1299 S Juniper Street', 'Philly', 'Pennsylvania', '19147'];

const [, city, state = "New York"] = address;//you can skip an item but keep comma

console.log(`You are in  ${state}`);
 */


const item = ['coffee (hot)', '$2.00', '$3.50', '$2.75'];

const [itemName, , mediumPrice,] = item;


console.log(`A medium ${itemName} costs ${mediumPrice}`)


