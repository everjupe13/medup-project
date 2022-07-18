class BurgerMenu {
    constructor() {
        this.navbar = document.getElementById('navbar')
        this.switcher = document.getElementById('burger-switcher')
        this.overflow = document.getElementById('navbar-overflow')

        this.switcher.addEventListener('click', () => {
            this.switchState()
        })

        this.overflow.addEventListener('click', () => {
            this.close()
        })

        this.bodyOffset()
    }

    close() {
        if (this.navbar.classList.contains('burger-active')) {
            this.navbar.classList.remove('burger-active')
            this.navbar.classList.add('burger-default');
        }
    }

    open() {
        if (this.navbar.classList.contains('burger-default')) {
            this.navbar.classList.remove('burger-default')
            this.navbar.classList.add('burger-active');
        }
    }

    switchState() {
        if (this.navbar.classList.contains('burger-default')) {
            this.open()
        } else if (this.navbar.classList.contains('burger-active')) {
            this.close()
        }
    }

    bodyOffset() {
        let header = document.querySelector('#header')
        let h = header.getBoundingClientRect().height
        // document.body.style.setProperty('padding-top', `${h}px`)

        window.addEventListener('resize', () => {
            header.addEventListener('transitionend', () => {
                h = header.getBoundingClientRect().height
                // document.body.style.setProperty('padding-top', `${h}px`)
            })
        })
    }
}


const burger = new BurgerMenu();
