function makeClicked() {
    var element = document.getElementById("heart-icon");
  element.classList.remove("hide");

  var element1 = document.getElementById("gray-heart-icon");
  element1.classList.add("hide");
};
function makeClicked1() {
    var element = document.getElementById("heart-icon");
  element.classList.add("hide");

  var element1 = document.getElementById("gray-heart-icon");
  element1.classList.remove("hide");
};
var x = 0;
var array = Array();
function addToCart() {
    var element = document.getElementById("total-count");
    element.classList.remove("hide"); 
 array[x] = document.getElementsByClassName('cart-img1').value;
 console.log('length array',array[x],x);
 document.getElementById("class-count-id").innerHTML = x;
 x++;
}

// function display_array()
// {
//    var e = "<hr/>";   
    
//    for (var y=0; y<array.length; y++)
//    {
//      e += "Element " + y + " = " + array[y] + "<br/>";
//    }
//    document.getElementById("class-count").innerHTML = e;
// }