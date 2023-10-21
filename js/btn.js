
function toggleBlock() {
  var block = document.getElementById("hiddenBlock");
  if (block.style.display === "none") {
    block.style.display = "block";   
} else {
    block.style.display = "none";
   
  }
}


const love = document.querySelector('[data-LOVE]')
const textLove = document.querySelector('[data-text-love]')
const btnMedia = document.querySelector('.btn__sourse')
const medias = document.querySelector('[data-media]')
const MyImg = document.getElementById('CatImg')
const videoCat = document.querySelector('.video2')
const fixedBtn = document.querySelector('.fixed__btn')
const btnContent = document.querySelector('.btn__content')

textLove.addEventListener('click',function(){
  love.classList.toggle('hidden')
})



MyImg.addEventListener('click',function(){
 if(MyImg.src ="img/cats__jostic.jpg"){
  MyImg.src ="img/cat1.jpg"
 }else if(MyImg.src ="img/cat1.jpg"){
  MyImg.src ="img/cats__jostic.jpg"
 }
})


btnMedia.addEventListener('click',function(){
  medias.classList.toggle('hidden')

  videoCat.classList.remove('rightCat')
  if(btnMedia.innerHTML ==='тыкни плз' ){
    btnMedia.innerHTML = 'Люблю ♥'
  }else{
    btnMedia.innerHTML = 'тыкни плз'
  }
})

fixedBtn.addEventListener('click',()=>{
  btnContent.classList.toggle('hidden')
})


const btnBurger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
  function Burger(){
    nav.classList.toggle('open')
  }

