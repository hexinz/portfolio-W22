// console.log('Requesting JSON');

// function favPost(id){
//     console.log("User saved card: "+id); 
//     $("#star_"+id).toggle();
//     $("#un_star_"+id).toggle();
// }

// function save(){
//   alert("User saved the card");
// }

// function remove(id) {
//     if (confirm("Are you sure to delete?")) {
//         console.log("User pressed OK");
//         console.log("User deleted card: "+id); 
//         $("#star_"+id).toggle();
//         $("#un_star_"+id).toggle();
//       } else {
//         console.log("User pressed Cancel");
//       }
// };


document.addEventListener('DOMContentLoaded', function () {
  console.log('Requesting JSON');
  var star1 = document.getElementById("star_1");
  var unstar1 = document.getElementById("un_star_1");
  var star2 = document.getElementById("star_2");
  var unstar2 = document.getElementById("un_star_2");
  var star3 = document.getElementById("star_3");
  var unstar3 = document.getElementById("un_star_3");
  var star4 = document.getElementById("star_4");
  var unstar4 = document.getElementById("un_star_4");
  star1.addEventListener('click', function (){
    console.log('click happens');
    $(star1).toggle();
    $(unstar1).toggle();
    return false;
  });
  unstar1.addEventListener('click', function (){
    if (confirm("Are you sure to delete?")) {
      console.log("User pressed OK");
      console.log("User deleted card: 1"); 
      $(star1).toggle();
      $(unstar1).toggle();
    } else {
      console.log("User pressed Cancel");
    }
  });
  star2.addEventListener('click', function (){
    console.log('click happens');
    $(star2).toggle();
    $(unstar2).toggle();
    return false;
  });
  unstar2.addEventListener('click', function (){
    if (confirm("Are you sure to delete?")) {
      console.log("User pressed OK");
      console.log("User deleted card: 2"); 
      $(star2).toggle();
      $(unstar2).toggle();
    } else {
      console.log("User pressed Cancel");
    }
  });
  star3.addEventListener('click', function (){
    console.log('click happens');
    $(star3).toggle();
    $(unstar3).toggle();
    return false;
  });
  unstar3.addEventListener('click', function (){
    if (confirm("Are you sure to delete?")) {
      console.log("User pressed OK");
      console.log("User deleted card: 3"); 
      $(star3).toggle();
      $(unstar3).toggle();
    } else {
      console.log("User pressed Cancel");
    }
  });
  star4.addEventListener('click', function (){
    console.log('click happens');
    $(star4).toggle();
    $(unstar4).toggle();
    return false;
  });
  unstar4.addEventListener('click', function (){
    if (confirm("Are you sure to delete?")) {
      console.log("User pressed OK");
      console.log("User deleted card: 4"); 
      $(star4).toggle();
      $(unstar4).toggle();
    } else {
      console.log("User pressed Cancel");
    }
  });
});



// unstar1.addEventListener('click', function () {
//   $("#star"+1).toggle();
//   $("#un_star"+1).toggle();
// });

// star1.addEventListener('click', function () {
//   $("#star"+1).toggle();
//   $("#un_star"+1).toggle();
// });
