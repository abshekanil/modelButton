let clickBtn = document.querySelector('.clickBtn');
let closeBtn = document.querySelector('.closeBtn');
let yesBtn = document.querySelector('.yesBtn');
let modalOption = document.querySelector('.modalOption');
let modalOuter = document.querySelector('.modalOuter');

clickBtn.addEventListener("click", function(){
    modalOption.style.display = "block";
    
}); 

yesBtn.addEventListener("click", function(){
    alert("Subscription successful");
    modalOption.style.display = "none";
   
    
});

closeBtn.addEventListener("click", function(){
    modalOption.style.display = "none";
   
});