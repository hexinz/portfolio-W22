console.log('Requesting JSON');

function favPost(id){
    console.log("User saved card: "+id); 
    $("#star_"+id).toggle();
    $("#un_star_"+id).toggle();
}

function save(){
  alert("User saved the card");
}

function remove(id) {
    if (confirm("Are you sure to delete?")) {
        console.log("User pressed OK");
        console.log("User deleted card: "+id); 
        $("#star_"+id).toggle();
        $("#un_star_"+id).toggle();
      } else {
        console.log("User pressed Cancel");
      }
};

