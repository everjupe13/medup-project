window.addEventListener('load', () => {

    if (document.querySelector('.page-contacts')) {

        const copied = document.querySelectorAll('.page-contacts [data-clip-copy]')

        copied.forEach(item => {
            const clipboardDone = (node, text) => {
                node.textContent = 'Скопировано'

                setTimeout(() => {
                    node.textContent = text
                }, 1500)
            }
            const state = item.dataset.clipCopy

            item.addEventListener('click', (e) => {
                const text = item.textContent
                navigator.clipboard.writeText(text).then(() => {
                    clipboardDone(item, text)
                }, (err) => {
                    if (err) throw err
                })
            })
        })

    } else {
        return false
    }
})