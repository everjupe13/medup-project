function fadeIn(element) {

    let op = 0.1  // initial opacity
    element.style.display = 'block'

    let timer = setInterval(function () {

        if (op >= 1) {
            clearInterval(timer)
        }

        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op += op * 0.1

    }, 10)
}

function fadeOut(element) {

    let op = 1;  // initial opacity
    let timer = setInterval(function () {

        if (op <= 0.1) {
            clearInterval(timer)
            element.style.display = 'none'
        }

        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op -= op * 0.1

    }, 10)
}



window.addEventListener('load', () => {

    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.querySelectorAll('#modal-overlay [data-modal-overlay="close"]');
    const forms = document.querySelectorAll('#modal-overlay [data-modal-overlay="singular"]');

    const loginBeacons = document.querySelectorAll('[data-modal-overlay="login"]');
    const loginForm = document.getElementById('modal-login');
    
    closeBtn.forEach((btn) => {

        btn.addEventListener('click', () => {

            fadeOut(overlay)

            forms.forEach((form) => {
                fadeOut(form)
            })
        })
    })

    loginBeacons.forEach((beacon) => {

        beacon.addEventListener('click', () => {

            fadeIn(overlay)
            fadeIn(loginForm)
        })
    })
})
