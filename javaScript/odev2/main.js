function newElement() {
    let LiDOM = document.createElement("li");
    let inputValue = document.querySelector("#task").value;
    let newDOM = document.createTextNode(inputValue);
    let localInput=localStorage.getItem("inputValue")
    LiDOM.appendChild(newDOM);
    if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
      $(".error").toast("show");
    } else {
      $(".success").toast("show");
      document.querySelector("#list").appendChild(LiDOM);
        localStorage.setItem("inputValue",inputValue)

    }
    document.querySelector("#task").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    LiDOM.appendChild(span);


    for ( let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          let div = this.parentElement;
          div.style.display = "none";
        };
      }
}
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);