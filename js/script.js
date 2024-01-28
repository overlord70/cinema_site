import { movies } from "./db.js";
import { go } from "./ui.js"
go()
let geners = movies.map(item => item = item.Genre)
geners = [...new Set(geners)]
// const header = document.querySelectorAll('.promo__menu-item')
// 
//     head.innerHTML = ''
let ul_i = document.querySelector('.ul-i')
for (const item of geners) {
    let li = document.createElement('li')
    li.innerHTML = `${item}`
    li.classList.add('promo__menu-item')
    ul_i.append(li)
}
let ul_li = document.querySelectorAll('.ul-i li')
let prev = 0
 ul_li.forEach((head, idx) => {
    ul_li[prev].classList.add('promo__menu-item_active')
     head.onclick = () => {
        ul_li[prev].classList.remove('promo__menu-item_active')
         head.classList.add('promo__menu-item_active')
         prev = idx
     }
      })
      