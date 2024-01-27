/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
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
let header_search = document.querySelector('.header__search')
const divs = document.querySelectorAll('.promo__bg div')
let span = document.querySelectorAll('.promo__bg div span')
function reload() {
ul.innerHTML = ""

for (let item of movies) {
// a
let idx = movies.indexOf(item)
let li = document.createElement('li')
let del = document.createElement('div')
// b
li.classList.add( 'promo__interactive-item')
del.classList.add('delete')
li.innerHTML = `${idx + 1}. ${item.Title}`
// с
li.append(del)
ul.append(li)

// d functions
del.onclick = () => {
    movies.splice(idx, 1)
    reload()
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
reload()
promoBg.onclick = () => {
    let audio = document.createElement('audio')
    audio.src = './mp_3/superhero-theme-7963.mp3'
    audio.play()
}