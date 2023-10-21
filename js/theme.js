const BlackBtn = document.querySelector('.clolo')
const BlackGrey = document.querySelector('.clolo_2')

const Gallery = document.querySelector('.gallery__content')
const GalleryText = document.querySelectorAll('.white__gallery-text')
const about = document.querySelector('.about')
const OneAboutContent = document.querySelector('.bgc__block')
const TwoAboutContent = document.querySelector('.color__block')
const TreaAboutContent = document.querySelector('.right__block')
const AboutText = document.querySelector('.about__content-text')
const media = document.querySelector('.media__section')
const btnSourse = document.querySelector('.btn__sourse')
const video = document.querySelector('.video')
const footer = document.querySelector('.footer')


function choiceDark(){
  // about.style.borderBottom.color ='white'

  AboutText.style.transition = '1s ease-out ';
  AboutText.style.color = '#adacab';

  media.style.transition = '1s ease-out ';
  media.style.background = 'black'  

  footer.style.transition = '1s ease-out ';
  footer.style.background = 'black' 

  video.style.transition = '1s ease-out ';
  video.style.background = 'black'  

  btnSourse.style.background = '#adacab'  
  btnSourse.style.transition = '1s ease-out ';



  OneAboutContent.style.background = '#adacab'
  OneAboutContent.style.transition = '1s ease-out ';

  TwoAboutContent.style.transition = '1s ease-out ';
  TwoAboutContent.style.background = '#adacab'

  TreaAboutContent.style.transition = '1s ease-out ';
  TreaAboutContent.style.background = '#adacab'

  about.style.transition = '1s ease-out ';
  about.style.background = 'black'

  Gallery.style.background = 'black'
  Gallery.style.transition = '1s ease-out ';
  GalleryText.forEach((el) => {
	el.style.transition = '1s ease-out ';
	el.style.color = 'white';
	});
}

function choiceGrey(){
    about.style.transition = '1s ease-out ';
    about.style.background = '#838383'

    AboutText.style.transition = '1s ease-out ';
    AboutText.style.color = 'white';
    
    OneAboutContent.style.transition = '1s ease-out ';
    OneAboutContent.style.background = 'white'

    AboutText.style.transition = '1s ease-out ';
    AboutText.style.color = 'white';

    media.style.transition = '1s ease-out ';
    media.style.background = '#838383'  

    btnSourse.style.background = '#b0bcbf'  
    btnSourse.style.transition = '1s ease-out ';

    footer.style.transition = '1s ease-out ';
    footer.style.background = '#838383' 



    TwoAboutContent.style.transition = '1s ease-out ';
    TwoAboutContent.style.background = 'white'

    TreaAboutContent.style.transition = '1s ease-out ';
    TreaAboutContent.style.background = 'white'

    video.style.transition = '1s ease-out ';
    video.style.background = 'white'  

    Gallery.style.background = '#838383'
    Gallery.style.transition = '1s ease-out ';
    GalleryText.forEach((el) => {
		el.style.transition = '1s ease-out ';
		el.style.color = 'white';
	});
}