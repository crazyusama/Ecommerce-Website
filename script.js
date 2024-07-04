let shop = document.getElementById("shop");
let blok = document.getElementById("blok");
let home = document.getElementById("home");
let about = document.getElementById("about")
let contact = document.getElementById("contact")



function shops(){
  blok.style.display='none';
  home.style.display='none';
  shop.style.display='block';

  document.getElementById('blok-color').style.color="black";
  document.getElementById('shop-color').style.color="rgb(40, 122, 122)";
  document.getElementById('home-color').style.color="black";
  document.getElementById('about-color').style.color="black";
  document.getElementById('contact-color').style.color="black";


}

function homes(){
    blok.style.display='block';
    home.style.display='block';
    shop.style.display='block';
    about.style.display="none";
    contact.style.display="none";
  
    document.getElementById('blok-color').style.color="black";
    document.getElementById('shop-color').style.color="black";
    document.getElementById('home-color').style.color="rgb(40, 122, 122)";
    document.getElementById('about-color').style.color="black";
    document.getElementById('contact-color').style.color="black";
  }

  function bloks(){
    blok.style.display='block';
    home.style.display='none';
    shop.style.display='none';
   contact.style.display="none"
   about.style.display="none";

    document.getElementById('blok-color').style.color="rgb(40, 122, 122)";
    document.getElementById('shop-color').style.color="black";
    document.getElementById('home-color').style.color="black";
    document.getElementById('about-color').style.color="black";
    document.getElementById('contact-color').style.color="black";
  
  }

  function abouts(){
    blok.style.display='none';
    home.style.display='none';
    shop.style.display='none';
    about.style.display="block";
        contact.style.display="none"

    document.getElementById('blok-color').style.color="black";
    document.getElementById('shop-color').style.color="black";
    document.getElementById('home-color').style.color="black";
    document.getElementById('about-color').style.color="rgb(40, 122, 122)";
    document.getElementById('contact-color').style.color="black";
  
  }

  function contacts(){
    blok.style.display='none';
    home.style.display='none';
    shop.style.display='none';
    about.style.display="none"
    contact.style.display="block"

    document.getElementById('blok-color').style.color="black";
    document.getElementById('shop-color').style.color="black";
    document.getElementById('home-color').style.color="black";
    document.getElementById('about-color').style.color="black";
    document.getElementById('contact-color').style.color="rgb(40, 122, 122)";
  
  }

function show(img){
    let newimj = document.getElementById("new-imj");
    newimj.src=img.src


    document.getElementById("cart").style.display="block"
    blok.style.display='none';
    home.style.display='none';
    shop.style.display='none';
    about.style.display="none"
    contact.style.display="none"
}
function addcart(){
   alert("Added To Cart")
   location.reload()
}
