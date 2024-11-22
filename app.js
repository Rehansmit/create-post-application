
var selectImgPath ;
var userName = document.getElementById("u_name");
var title = document.getElementById("u_title");
var description = document.getElementById("d_iscrip");
var post = document.getElementById("t_post")
var currentDateTime = new Date().toString();



function selectedImage(src) {
   var imagesBg = document.getElementsByClassName('bg-image')
    for(var i = 0; i < imagesBg.length; i++) {
        imagesBg[i].className = 'bg-image'
    }
    event.target.classList.add('selectedImage')
    selectImgPath = src
}


function submitPost() {
  
  var listingContainer = document.querySelector("#listingContainer");

  if (userName.value.trim() !== "") {
    if (title.value.trim() !== "") {
      if (description.value.trim() !== "")
        if(post.value.trim() !=="") {
        listingContainer.innerHTML += `<div class="card my-4">
<div class="card-header d-flex justify-content-between gape-10">
   <span>
    ~@${userName.value}
   </span>
   <span>
    ${currentDateTime}
   </span>
</div>
<div  style="background-image: url('${selectImgPath}')" class="card-body postCardBody">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${description.value}</p>
    <p class="card-text">${post.value}</p>

</div>
</div>`;


userName.value = ''
title.value = ''
description.value = ''
post.value=''
      }
      else {
        alert("massage is required");
      } 
      else {
        alert("description is required");
      }
    } else {
      alert("Title is Required");
    }
  } else {
    alert("Username is required");
  }
}
