console.log("15 Objects");

// The properties of Objects

var cheese = [
  {
    name: "Stilton",
    id: "stilton",
    price: 12,
    country: "Ireland",
    milk: "cow",
    texture: "Semi-soft",
    flavour: "Salty",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/stilton.jpg"
  },
  {
    name: "Mozzarella",
    id: "mozzarella",
    price: 8,
    country: "Italy",
    milk: "cow",
    texture: "Pasta-filata",
    flavour: "Mild",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/mozzarella.jpg"
  },
  {
    name: "Cheddar",
    id: "cheddar",
    price: 10,
    country: "England",
    milk: "cow",
    texture: "Semi-hard",
    flavour: "Sharp",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/cheddar.jpg"
  },
  {
    name: "Emmental",
    id: "emmental",
    price: 9,
    country: "Switzerland",
    milk: "cow",
    texture: "Semi-hard",
    flavour: "Savory",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/emmental.jpg"
  },
  {
    name: "Gouda",
    id: "gouda",
    price: 9,
    country: "Switzerland",
    milk: "cow",
    texture: "Semi-hard",
    flavour: "Mild",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/gouda.jpg"
  },
  {
    name: "Brie",
    id: "brie",
    price: 14,
    country: "France",
    milk: "cow",
    texture: "Soft-ripened",
    flavour: "Buttery",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/brie.png"
  },
  {
    name: "Mascarpone",
    id: "mascarpone",
    price: 14,
    country: "Italy",
    milk: "cow",
    texture: "Soft-unripened",
    flavour: "Milky",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/mascarpone.jpg"
  },
  {
    name: "Ricotta",
    id: "ricotta",
    price: 8,
    country: "Italy",
    milk: "cow",
    texture: "Fresh-cheese",
    flavour: "Sweet",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/ricotta.jpg"
  },
  {
    name: "Camembert",
    id: "camembert",
    price: 17,
    country: "France",
    milk: "cow",
    flavour: "Sweet",
    texture: "Soft-ripened",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/camembert.jpg"
  },
  {
    name: "Chevre",
    id: "chevre",
    price: 16,
    country: "France",
    milk: "goat",
    flavour: "Buttery",
    texture: "Fresh cheese",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/chevre.jpg"
  },
  {
    name: "Cambozola",
    id: "cambozola",
    price: 13,
    country: "Germany",
    milk: "cow",
    flavour: "Savory",
    lactose: true,
    texture: "Soft-ripened",
    vegan: false,
    vegetarian: true,
    photo: "img/cambozola.jpg"
  },
  {
    name: "Havarti",
    id: "havarti",
    price: 9,
    country: "Denmark",
    milk: "cow",
    flavour: "Sweet",
    texture: "Semi-soft",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/havarti.jpg"
  },
  {
    name: "Provolone",
    id: "provolone",
    price: 13,
    country: "Italy",
    milk: "cow",
    flavour: "Milky",
    texture: "Semi-hard",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/provolone.jpg"
  },
  {
    name: "Manchego",
    id: "manchego",
    price: 7,
    country: "Spain",
    milk: "sheep",
    flavour: "sweet",
    texture: "Hard cheese",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/manchego.jpg"
  },
  {
    name: "Jarlsberg",
    id: "jarlsberg",
    price: 7,
    country: "Norway",
    milk: "cow",
    flavour: "Buttery",
    texture: "Semi-soft",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/jarlsberg.jpg"
  }
];

console.log(cheese.length);

// This will display all the individual cheese objects
document.getElementById('allCheese').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; //to clear the container
  for(var i = 0; i < cheese.length; i++) {
     allCheese(i);

};
})

// This is my function that captures all the properties witin the object

function allCheese(j){

 document.getElementById('cheese').innerHTML
 += '</br><h1 class="jumbotron card-titled">' + cheese[j].name + '</h1>'
 + '<div class="row">'
 +'<div class="col">'
 + '<img class="card-img-top" src="' + cheese[j].photo + ' "  alt="Cheese" style="width:100%"/>'
 + '</div>'
 + '<div class="col">'
 + '</br></br> Country : <h5 class="card-text" >' + cheese[j].country + '</h5>'
 + '</br> Flavour: <h5 class="card-text" > ' + cheese[j].flavour + '</h5>'
 + '</br> Texture: <h5 class="card-text" >' + cheese[j].texture + '</h5>'
 + '</div>'
 + '</div>'
 + '</br>'
 + '</br>';
}

// This is where only cheese made with cow milk will show

document.getElementById('cow').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; // to clear the container
  for(var r = 0; r < cheese.length; r++) {
    if (cheese[r].milk === "cow") {
       allCheese(r);
   }
  }
});

// This is where only cheese made in Italy will show

document.getElementById('italyCountry').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; // to clear the container
  for(var r = 0; r < cheese.length; r++) {
    if (cheese[r].country === "Italy") {
       allCheese(r);
   }
  }
});

// This is where only cheese made in Italy will show

document.getElementById('franceCountry').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; // to clear the container
  for(var r = 0; r < cheese.length; r++) {
    if (cheese[r].country === "France") {
       allCheese(r);
   }
  }
});

// This is where only cheese made in Denmark will show

document.getElementById('denmarkCountry').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; // to clear the container
  for(var r = 0; r < cheese.length; r++) {
    if (cheese[r].country === "Denmark") {
       allCheese(r);
   }
  }
});

// The price of cheese is $13

document.getElementById('price13').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; //to clear the container
  for(var i = 0; i < cheese.length; i++) {
    if (cheese[i].price === 13) {
       allCheese(i);
   }
  }
});

// The price of cheese is $8

document.getElementById('price8').addEventListener('click', function(){
  document.getElementById('cheese').innerHTML = " "; //to clear the container
  for(var i = 0; i < cheese.length; i++) {
    if (cheese[i].price === 8) {
       allCheese(i);
   }
  }
});

// The cheese contains lactose: true or false?

document.getElementById('lactose').addEventListener('click',function(){
  document.getElementById('cheese').innerHTML = " "; //to clear the container
  for(var i = 0; i < cheese.length; i++) {
if (cheese.lactose === true) {
 allCheese(i);
} else {
 allCheese(i);
   }
  }
});
