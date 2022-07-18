window.addEventListener('load', () => {

    const btn = document.querySelector('.footer .footer__btn-up')
    btn.onclick = () => {
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
})