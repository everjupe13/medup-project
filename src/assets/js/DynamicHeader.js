class DynamicHeader {
    constructor() {

        this.lastScroll = 0

        const preheader = document.querySelector('.preheader')
        const preheaderHeight = preheader.getBoundingClientRect().height + parseInt(window.getComputedStyle(preheader).marginBottom, 10);

        this.defaultOffset = preheaderHeight || 30
        this.defaultOffsetHide = window.innerHeight / 2
        this.header = document.getElementById('header')

        this.switchScroll()

        window.addEventListener('scroll', () => {
            this.switchHide()
            this.switchScroll()
        })
    }

    bodyOffset(state = true) {
        if (state) {
            let header = document.querySelector('#header')
            let h = header.getBoundingClientRect().height
            document.body.style.setProperty('padding-top', `${h}px`)
            document.body.style.setProperty('transition', 'none')

            return true
        } else {
            document.body.style.setProperty('padding-top', '0')
            document.body.style.setProperty('transition', 'none')

            return true
        }
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
            this.bodyOffset(true)
            this.header.classList.add('scrolled')
        } else if (this.scrollPosition() < (this.defaultOffset)) {
            this.bodyOffset(false)
            this.header.classList.remove('scrolled')
        }
    }
}



window.addEventListener('load', () => {
    const dynamicHeader = new DynamicHeader()
})
