let home=document.querySelector(".home");
let navicon=document.querySelector(".navicon");
let nav_search =document.querySelector(".nav-search");
let contact=document.querySelector(".contact");
let signin=document.querySelector(".signin");
let cart=document.querySelector(".cart");


//for home---->
home.addEventListener("mouseenter" ,()=>{
home.style.border="1px solid white";
home.style.color="cornsilk";
});
home.addEventListener("mouseleave" ,()=>{
 home.style.border="none";
 home.style.color="white";
 });

//for navigation icon-->

navicon.addEventListener("mouseenter" ,()=>{
navicon.style.border="1px solid white";
 navicon.style.color="cornsilk";
 });
 navicon.addEventListener("mouseleave" ,()=>{
 navicon.style.border="none";
 navicon.style.color="white";         
});
          

 //for contact box->
 contact.addEventListener("mouseenter" ,()=>{
 contact.style.border="1px solid white";
 contact.style.color="cornsilk";
                   
});
                  
 contact.addEventListener("mouseleave" ,()=>{
contact.style.border="none";
  contact.style.color="white";                      
});

 //for signIn box----->
  signin.addEventListener("mouseenter" ,()=>{
 signin.style.color="cornsilk";
  signin.style.border="1px solid white"                                  
});
  signin.addEventListener("mouseleave" ,()=>{
 signin.style.border="none"; 
 signin.style.color="white";    
 });
                                      
 //for Cart box----->    
 cart.addEventListener("mouseenter" ,()=>{
 cart.style.color="cornsilk";
 cart.style.border="1px solid white"                             
});
 cart.addEventListener("mouseleave" ,()=>{
cart.style.border="none";
 cart.style.color="white";                                 
 });

                                       
                                               
                       
                
