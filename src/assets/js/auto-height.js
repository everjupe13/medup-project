window.addEventListener('load', () => {
    let titles = document.querySelectorAll('#grid-card .card__title')
    let text = document.querySelectorAll('#grid-card .card__text')

    equalHeight(titles)
    equalHeight(text)

})


function equalHeight(el) {
    let max = 0;
    el.forEach(item => {
        if (item.clientHeight >= max) {
            max = item.clientHeight
        }
    })

    el.forEach(item => {
        item.style.height = max + 'px'
    })
}