var text = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';


obj = JSON.parse(text);

var Table = Object();

Table.getData = function(team) {
  this.data = comand;
};

Table.drawColumn = function () {
  var Name = document.createElement("TD");
};

Table.drawRow = function () {
  var TableRow = document.createElement("TR");
};

Table.createTable = function (rootRender) {
  var TableRow = document.createElement("TABLE");
  document.getElementById(rootRender).appendChild(Table);
};

Table.init = function(team) {
  this.getData(team);

  this.drawColumn();

  this.drawRow();

  this.createTable();
};

Table.init(data[0]);

// var Table = document.createElement("TABLE");
//
// var TableRow = document.createElement("TR");
//
// var Place = document.createElement("TH");
//
// Place.innerHTML = "Місце";
//
// var Name = document.createElement("TH");
//
// Name.innerHTML = "Назва";
//
// var ImgLogo = document.createElement('IMG');
//
// ImgLogo.src = " ";
//
// var Logo = document.createElement("TH");
//
// Logo.setAttribute("class", "img");
//
// Logo.appendChild(ImgLogo);
//
// var Games = document.createElement("TH");
//
// Games.innerHTML = "Ігор";
//
// var Win = document.createElement("TH");
//
// Win.innerHTML = "Перемог";
//
// var Draw = document.createElement("TH");
//
// Draw.innerHTML = "Нічиїх";
//
// var Lose = document.createElement("TH");
//
// Lose.innerHTML = "Поразок";
//
// var Goal_difference = document.createElement("TH");
//
// Goal_difference.innerHTML = "Різниця м'ячів";
//
// var Score = document.createElement("TH");
//
// Score.innerHTML = "Очки";
//
// TableRow.appendChild(Place);
// TableRow.appendChild(Logo);
// TableRow.appendChild(Name);
// TableRow.appendChild(Games);
// TableRow.appendChild(Win);
// TableRow.appendChild(Draw);
// TableRow.appendChild(Lose);
// TableRow.appendChild(Goal_difference);
// TableRow.appendChild(Score);
//
// Table.appendChild(TableRow);
//
// document.getElementById("js-table").appendChild(Table);
