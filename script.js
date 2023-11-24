//Function to slide in the menu list
 let menu=document.querySelector(".menu");
 document.querySelector(".bar").addEventListener("click",()=>{
   menu.classList.add("open-menu")
   document.querySelector("body").style.backdropFilter="30%";
 });
document.querySelector(".menu-close").addEventListener("click",()=>{
menu.classList.remove("open-menu");
 })
 
 // Function for menu collapse and expand
 let features=document.querySelector(".features ").addEventListener("click",function(){
  
     let featArrow=document.querySelector(".arrow-down")
     
   let featureslist = document.querySelector(".features ul");
  if(featureslist.style.display=="none"){
    featureslist.style.display="block";
     // Rotates Feature arrow-down
    featArrow.classList.add("rotate-svg");
  }else{
    featureslist.style.display="none";
    featArrow.classList.remove("rotate-svg");
  }

 })
 let company=document.querySelector(".company").addEventListener("click",function(){
   let compArrow=document.querySelector(".arrow-down2");
   
   let companyList=document.querySelector(".company ul");
   if(companyList.style.display=="none"){
   // Rotates company Arrow-down
     compArrow.classList.add("rotate-svg");
     companyList.style.display="block";
   }else{
     companyList.style.display="none";
     compArrow.classList.remove("rotate-svg");
   }
  
 });