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
    flavour: "salty",
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
    texture: "pasta-filata",
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
    texture: "semi-hard",
    flavour: "sharp",
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
    texture: "semi-hard",
    flavour: "savory",
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
    texture: "soft-ripened",
    flavour: "buttery",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/brie.jpg"
  },
  {
    name: "Mascarpone",
    id: "mascarpone",
    price: 14,
    country: "Italy",
    milk: "cow",
    texture: "soft-unripened",
    flavour: "milky",
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
    texture: "fresh-cheese",
    flavour: "sweet",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/mascarpone.jpg"
  },
  {
    name: "Camembert",
    id: "camembert",
    price: 17,
    country: "France",
    milk: "cow",
    flavour: "sweet",
    texture: "soft-ripened",
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
    flavour: "buttery",
    texture: "fresh-cheese",
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
    flavour: "savory",
    lactose: true,
    texture: "soft-ripened",
    vegan: false,
    vegetarian: true,
    photo: "img/cambozala.jpg"
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
    name: "Cambozola",
    id: "cambozola",
    price: 13,
    country: "Germany",
    milk: "goat",
    flavour: "savory",
    texture: "",
    lactose: true,
    vegan: false,
    vegetarian: true,
    photo: "img/cambozala.jpg"
  },
  {
    name: "Manchego",
    id: "manchego",
    price: 7,
    country: "Spain",
    milk: "sheep",
    flavour: "sweet",
    texture: "",
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
    flavour: "buttery",
    texture: "semi-soft",
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

function allCheese(j){

 document.getElementById('cheese').innerHTML
 += '</br><h1 class="jumbotron text-danger">' + cheese[j].name + '</h1>'
 + '<div class="row">'
 +'<div class="col">'
 + '<img class="img-thumbnail mt-5 myDogs" src="' + cheese[j].photo + ' "  alt="Cheese"/>'
 + '</div>'
 + '<div class="col">'
 + '</br></br> Breed : <h5 class="text-danger" >' + cheese[j].country + '</h5>'
 + '</br> Flavour: <h5 class="text-danger" > ' + cheese[j].flavour + '</h5>'
 + '</br> Texture: <h5 class="text-danger" >' + cheese[j].texture + '</h5>'
 + '</div>'
 + '</div>';

}
