document.addEventListener('DOMContentLoaded',() => {
    const videoNat = document.querySelector('.video1')

    window.addEventListener('scroll',()=>{
        let windowTop = window.scrollY
        if(windowTop>3000){
            videoNat.classList.remove('hidden')
        }else if(windowTop<2800){
            videoNat.classList.add('hidden')
        }
    })
})



