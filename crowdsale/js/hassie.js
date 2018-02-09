//I Agree Funtionality
$("#contribute_btn").click(function(event) {

  var checked = $('input[name="chk[]"]:checked').length;

if (checked<3) { // if checkboxes are checked
  alert("Please Check all boxes");
}
else{ //create hide content and replace with new thing
  $(".modal-content").css('display', 'none'); //hides the dislaimer form
  $(".modal-content2").css('display', 'block'); // shows the 2nd modal with address

}
});









// Modal JS
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
