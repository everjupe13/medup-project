class DynamicHeader {
    constructor() {

        this.lastScroll = 0
        this.defaultOffset = 30
        this.defaultOffsetHide = window.innerHeight / 3
        this.header = document.getElementById('header')

        this.switchScroll()

        window.addEventListener('scroll', () => {
            this.switchHide()
            this.switchScroll()
        })
    }

    scrollPosition() {
        return window.pageYOffset || document.documentElement.scrollTop
    }

    containHide() {
        return header.classList.contains('hide')
    }

    containScrolled() {
        return header.classList.contains('scrolled')
    }

    switchHide() {
        if ((this.scrollPosition() > this.lastScroll) && !this.containHide() && (this.scrollPosition() > this.defaultOffsetHide)) {
            //scroll down
            this.header.classList.add('hide')
        } else if ((this.scrollPosition() < this.lastScroll) && this.containHide()) {
            //scroll up
            this.header.classList.remove('hide')
        }

        this.lastScroll = this.scrollPosition()
    }

    switchScroll() {
        if (this.scrollPosition() > (this.defaultOffset) && !this.containScrolled()) {
            this.header.classList.add('scrolled')
        } else if (this.scrollPosition() < (this.defaultOffset)) {
            this.header.classList.remove('scrolled')
        }
    }
}



window.addEventListener('load', () => {
    const dynamicHeader = new DynamicHeader()
})
