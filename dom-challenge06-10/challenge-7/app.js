/**
 * Write your challenge solution here
 */
const accordionButtons = document.querySelectorAll('.accordion-button')

accordionButtons.forEach(item => {
    item.addEventListener('click', function () {
        if (item.parentElement.classList.contains('active')) {
            item.parentElement.classList.remove('active')
        } else {
            document
                .querySelectorAll('.accordion-item.active')
                .forEach(item => {
                    item.classList.remove('active')
                })
            item.parentElement.classList.add('active')
        }
    })
})