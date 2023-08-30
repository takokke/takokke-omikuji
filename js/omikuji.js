let username;
let userfortune;
username = prompt('お名前を入力してください');

if (!username == "") {
  document.getElementById("name").innerHTML = username;
} else {
  document.getElementById("name").innerHTML = "名無し";
}



let rand = Math.floor( Math.random() * 5);
switch (rand){
  case 0:
    userfortune = "大吉";
    break;
  case 1:
    userfortune = "吉"
    break;
  case 2:
    userfortune = "小吉"
    break;
  case 3:
    userfortune = "末吉"
    break;
  default:
    userfortune = "凶";
}

document.getElementById("fortune").innerHTML = userfortune;