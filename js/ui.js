import { movies } from "./db.js"

export function doingAll() {
    let geners = movies.map(item => item = item.Genre)
    geners = [...new Set(geners)]
    console.log(geners);
    // 1
    let Type_of_gener = document.querySelector('.promo__genre')
    Type_of_gener.innerHTML = 'Drama'
    // 2
    let advs = document.querySelectorAll('.promo__adv img')
    advs.forEach(adv => {
        adv.remove()
    })
    // 3 
    let promoBg = document.querySelector('.promo__bg')
    promoBg.style.background = `url("./img/bg.jpg") center center/cover no-repeat`
    // 4,5
    let ul = document.querySelector('.promo__interactive-list')
    let lis = document.querySelectorAll('.promo__bg div')
    for(let item of movies){
        let idx = movies.indexOf(item)
        let div = document.createElement("div")
        let li = document.createElement('li')
        li.innerHTML = `${idx + 1}.` + `${item.Title}`
        li.classList.add('promo__interactive-item')
        div.classList.add('delete')
        div.onclick = () => {
            li.remove()
        }
        li.append(div)
        ul.append(li)

        li.onclick = () => {
            promoBg.style.background = `url(${item.Poster}) center center/cover no-repeat`
            lis.forEach(text => {
                if(text.className === 'promo__genre'){
                    text.innerHTML = item.Genre
                }else if (text.className === 'promo__title'){
                    text.innerHTML = item.Title
                }else if(text.className === 'promo__descr'){
                    text.innerHTML = item.Plot
                } else if (text.className === 'promo__ratings'){
                    text.firstElementChild.innerHTML = 'IMDb: ' + item.imdbRating
                    item.Ratings.find(elem => {
                        text.lastElementChild.innerHTML = 'Кинопоиск: ' + elem.Value
                    })
                }
            })
        } 
    }
    let ul_list = document.querySelectorAll('.promo__menu-list li')
    let ul_1 = document.querySelector('.promo__menu-list ')
    let prev = 0
    let ul_2 = document.querySelectorAll('.promo__interactive-list li')
    for (const gener of geners) {
        ul_list.forEach(item => {
            item.remove()
        })
        let li_0 = document.createElement('li')
        li_0.classList.add('promo__menu-item')
        li_0.innerHTML = gener
        ul_1.append(li_0)
    }
    let ul_list_1 = document.querySelectorAll('.promo__menu-list li')
    ul_list_1.forEach((innertext,idx) => {
        ul_list_1[prev].classList.add('promo__menu-item_active')
        innertext.onclick = () => {
        ul_list_1[prev].classList.remove('promo__menu-item_active')
        innertext.classList.add('promo__menu-item_active')
        prev = idx
        movies.filter(item => {
            if(item.Genre === innertext.innerHTML){
                ul_2.forEach(li => {
                    li.innerHTML = item.Title
                })
            }
        });
        }
    })
}
doingAll()