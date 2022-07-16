class Residence {
    constructor(options) {
        this.options = options
    }

    render() {
        let row = document.querySelector('.popular-residence')
        let html = `
                    <div class="card">
                        <img src="${this.options.src}" alt="Residence" class="card-image">

                        <div class="card-body">
                            <div class="location card__span">
                                <img src="src/img/location.svg" alt="">
                                ${this.options.location}
                            </div>

                            <div class="info">
                                <div class="beds card__span">
                                    <img src="src/img/bed.svg" alt="">
                                    ${this.options.beds}
                                </div>

                                <div class="size card__span">
                                    <img src="src/img/size.svg" alt="">
                                    ${this.options.size}
                                </div>

                                <div class="square card__span">
                                    <img src="src/img/size.svg" alt="">
                                    ${this.options.square}m2
                                </div>
                            </div>
                            
                            <div class="card-form">
                                <button class="btn btn-primary">
                                    Buy Now
                                </button>
    
                                <div class="price card__span">
                                    <img src="src/img/currency.svg" alt="">
                                    ${this.options.price}
                                </div>
                            </div>
                        </div>

                    </div>
        `
        row.innerHTML += html

    }

}

module.exports = Residence