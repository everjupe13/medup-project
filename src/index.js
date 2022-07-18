import './assets/js/DynamicHeader.js'
import './assets/js/BurgerMenu.js'
import './assets/js/gallery-section.js'
import './assets/js/ContactsPage.js'
import './assets/js/pageReturner.js'

import './assets/scss/main.scss';




// adaptive logos
window.addEventListener('load', () => {

    const logos = document.querySelectorAll('.page-main .logos .logos__img')

    const currentWidth = () => {
        return Math.max(
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
        )
    }

    const Payload = (arg) => {

        const gridformUpdate = (state = true) => {
            const forms = document.querySelectorAll('.form-inline')

            if (state === 'desktop') {
                forms.forEach((form) => {
                    const security = form.querySelector('.form-inline__info-footer')
                    const p = form.querySelector('.form-inline__info-wrapper')

                    p.appendChild(security)
                })

                return true
            } else if (state === 'mobile') {
                forms.forEach((form) => {
                    const security = form.querySelector('.form-inline__info-footer')
                    const p = form.querySelector('.form-inline__grid')

                    p.appendChild(security)
                })

                return true
            }
        }

        if (arg === 'mobile') {

            logos.forEach((el) => {
                el.style.width = 'auto'
                let w = Math.floor(parseInt(el.getBoundingClientRect().width, 10) * 0.8)
                el.style.width = w + 'px'
            })

            gridformUpdate('mobile')

            return true
        }

        if (arg === 'tablet') {
            logos.forEach((el) => {
                el.style.width = 'auto'
                let w = Math.floor(parseInt(el.getBoundingClientRect().width, 10) * 0.9)
                el.style.width = w + 'px'
            })

            gridformUpdate('mobile')

            return true
        }

        if (arg === 'desktop') {
            logos.forEach((el) => {
                el.style.width = 'auto'
                let w = Math.floor(parseInt(el.getBoundingClientRect().width, 10) * 1)
                el.style.width = w + 'px'
            })

            gridformUpdate('desktop')

            return true
        }
        return false

    }

    const update = (w) => {
        if (w <= 768) {
            Payload('mobile')
        } else if (w <= 992) {
            Payload('tablet')
        } else {
            Payload('desktop')
        }
    }

    update(currentWidth())
    window.addEventListener('resize', () => { update(currentWidth()) })

})

