var search = document.getElementsByClassName("aa");

function search(){
    var search = document.getElementsByClassName("aa");
    search.classList.add("cc");
}



search.addEventListener('click', function handleClick(event) {
    event.target.classList.add('cc');
  });
