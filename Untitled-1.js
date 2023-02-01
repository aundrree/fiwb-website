const myFunction = () => {
    document.getElementById("first").style.display ='block';
    document.getElementById("second").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='none'

  }
  
  const myFunction2 = () => {
    document.getElementById("second").style.display ='block'
    document.getElementById("first").style.display ='none'
    document.getElementById("third").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='none'


  }
  
  const myFunction3 = () => {
    document.getElementById("third").style.display ='block'
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='none'


  }

  const myFunction4 = () => {
    document.getElementById("third").style.display ='none'
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("fourth").style.display ='block'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='none'


  }

  const myFunction5 = () => {
    document.getElementById("third").style.display ='none'
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='block'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='none'


  }

  const myFunction6 = () => {
    document.getElementById("third").style.display ='none'
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='block'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='none'

  }

  const myFunction7 = () => {
    document.getElementById("third").style.display ='none'
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='block'
    document.getElementById("eight").style.display ='none'

  }

  const myFunction8 = () => {
    document.getElementById("third").style.display ='none'
    document.getElementById("first").style.display ='none'
    document.getElementById("second").style.display ='none'
    document.getElementById("fourth").style.display ='none'
    document.getElementById("fifth").style.display ='none'
    document.getElementById("sixth").style.display ='none'
    document.getElementById("seventh").style.display ='none'
    document.getElementById("eight").style.display ='block'
  }



  




  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }


  // Get the modal
  var modal = document.getElementById('myModal2');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg2');
  var modalImg = document.getElementById("img02");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
      modal.style.display = "none";
  }