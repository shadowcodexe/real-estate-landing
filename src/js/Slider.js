class Slider {
    constructor(selector,options) {
        this.selector = selector
        this.options = options
    }

    renderButtons() {
        let selector = document.querySelector(this.selector)
        let sliderButtons = document.querySelector(this.options.buttonsSelector)
        let btnLeft = sliderButtons.querySelector('.arrow-left')
        let btnRight = sliderButtons.querySelector('.arrow-right')

        btnLeft.addEventListener('click',() => {
            selector.scrollLeft = 0
            toggle()
        })

        btnRight.addEventListener('click',() => {
            selector.scrollLeft = selector.scrollWidth
            toggle()
        })

        function toggle() {
            if (selector.scrollLeft !== 0) {
                btnLeft.classList.add('active')
                btnRight.classList.remove('active')
            } else {
                btnLeft.classList.remove('active')
                btnRight.classList.add('active')
            }
        }
    }
}

module.exports = Slider