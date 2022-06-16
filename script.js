document.querySelectorAll(".text-input").forEach((element) => {
    element.addEventListener("blur", (event) => {
      if (event.target.value != "") {
        event.target.nextElementSibling.classList.add("filled");
      } else {
        event.target.nextElementSibling.classList.remove("filled");
      }
    });
  });

  function myFunction(x) {
    x.classList.toggle("change");
  }

  $(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});