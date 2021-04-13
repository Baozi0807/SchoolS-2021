document.write("Hello, world!");

function sayHello(){
  var response = prompt("What is your name?");
  alert("Hello " + response + ", have a good day!");
}
sayHello();

function add(a,b){
  return a + b;
} console.log(add(20,30));
console.log(add(100,30));

function showTopic(){
var x = document.getElementById("demo");
 x.style.fontSize = "25px";
x.style.color = "red";
}

var movies =["Avengers","Captain Marvel", "Black panther", "Spiderman"];
movies[0]="WonderWoman";
movies.push("Avengers");
movies.pop("Avengers");
console.log( movies);

var movie ={
  title:"Captain Marvel",
  time:"2pm"
}
alert(movie.title);


var fruits = [ ];
for (i=1; i< 10 ; i++){
fruits[i] = prompt("Enter a fruit"); }
alert("fruits contains " + fruits);
