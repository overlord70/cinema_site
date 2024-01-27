import { movies } from "./db.js";
export function go () {
    // 1
const adv = document.querySelectorAll('.promo__adv img ')
adv.forEach(element => {
    element.remove()
});
// 2
const title = document.querySelector('.promo__genre')
title.innerHTML = "драма"
// 3
let bg = document.querySelector('.promo__bg')
 bg.style.background =  `url("./img/bg.jpg") center center/cover no-repeat`
 // extra one
const header = document.querySelectorAll('.promo__menu-item')
let prev = 0
header.forEach((item,idx) => {
    item.onclick = () => {
       header[prev].classList.remove('promo__menu-item_active')
        item.classList.add('promo__menu-item_active')
        prev = idx
    }
})
// 4,5,h/w
const ul = document.querySelector('.promo__interactive-list')
const promoBg = document.querySelector('.promo__bg')
const divs = document.querySelectorAll('.promo__bg div')
let span = document.querySelectorAll('.promo__bg div span')
function reload(arr,place) {
place.innerHTML = ""

for (let item of arr) {
// a
let idx = arr.indexOf(item)
let li = document.createElement('li')
let del = document.createElement('div')
// b
li.classList.add( 'promo__interactive-item')
del.classList.add('delete')
li.innerHTML = `${idx + 1}. ${item.Title}`
// с
li.append(del)
place.append(li)

// d functions
del.onclick = () => {
    arr.splice(idx, 1)
    reload(movies,ul)
}
li.onclick = () => {
    promoBg.style.background = `url(${item.Poster}) no-repeat center/cover`
    divs.forEach(div => {
        if(div.className === 'promo__genre'){
            div.innerHTML = `${item.Genre}`
        } else if(div.className === 'promo__title'){
            div.innerHTML = `${item.Title}`
        }else if (div.className === 'promo__descr'){
            div.innerHTML = `${item.Plot}`
        }
        span.forEach(sp => {
            if(sp.innerHTML.includes('IMDb:')){
                sp.innerHTML = 'IMDb: ' + `${item.imdbRating}`
            } else {
                sp.innerHTML = 'Кинопоиск: ' + `${item.Metascore}`
            }
        })
        
    })
}
}
}
reload(movies,ul)
}
go()