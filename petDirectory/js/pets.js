/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
var pets = [{name: "Eric", type: "dog",breed: "Assuie", age: 6, photo:  "img/aussie.jpg"},
            {name: "Susan", type: "dog",breed: "Dachshund", age: 4, photo: "img/dachshund.jpg"},
            {name: "Bennie", type: "dog", breed: "Golden Retreiver", age:7, photo: "img/golden.jpg"},
            {name: "King", type: "cat", breed: "Persian", age:3, photo: "img/persian.jpg"}, 
            {name: "Muffin", type: "dog", breed: "Pug", age:9, photo: "img/pug.jpg"},
            {name: "Lucifer", type: "cat", breed: "Tabby", age:9, photo: "img/tabby.jpg"}];

//console.log(...pets);
const main = document.querySelector('main');
var html = ``;
for( let pet in pets){
  console.log(pet);
  
html += `<h2>${pets[pet].name}</h2>
      <h3> ${pets[pet].type} | ${pets[pet].breed} </h3>
      <p>Age: ${pets[pet].age}</p>
<img src= "${pets[pet].photo}" alt="${pets[pet].breed}"> 
`}; 


main.innerHTML = html;
