const webpageWrap = document.querySelectorAll('.wepage')
webpageWrap.forEach(webpages => {
    webpages.addEventListener('mouseover',() => {
       webpages.childNodes[1].classList.add('img-darken');
    })
    webpages.addEventListener('mouseout',() => {
       webpages.childNodes[1].classList.remove('img-darken');
    })
})

// function open(param){
//     alert(param)
// }