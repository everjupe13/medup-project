window.addEventListener('load', () => {

    const faqItems = document.querySelectorAll('.faq-drop__item')

    faqItems.forEach((item) => {

        let heightBody = item.children[1].children[0].offsetHeight
        item.style.setProperty('--innerHeight', `${heightBody}px`)

        item.addEventListener('click', () => {
            item.classList.toggle('open')

            if (item.classList.contains('open')) {
                item.children[1].style.height = `${heightBody}px`
            } else {
                item.children[1].style.height = '0px'
            }

        })
    })
})