/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
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
// 4 and h/w
const ul = document.querySelector('.promo__interactive-list')
const trash = document.querySelector('.trash')
for(let item of movieDB.movies){
    let div = document.createElement('div')
    let img = document.createElement('img')
    let idx = movieDB.movies.indexOf(item) + 1
    let li = document.createElement('li')
    li.classList.add('promo__interactive-item')
    img.src = '../img/rubish0_2.png'
    img.style.maxWidth = '27px'
    img.style.display = 'none'
    li.innerHTML = idx + ' ' + item 
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.append(li,img)
    ul.append(div)
    div.onmouseenter = () => {
        img.style.display = 'block'
        img.onclick = () => {
            li.remove()
        }
    }
    div.onmouseleave = () => {
        img.style.display = 'none'
    }
}