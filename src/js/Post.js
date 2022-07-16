class Post {
    constructor(options) {
        this.options = options
    }
    
    generateStars(rateNum) {
        let finalHTML = ''
    
        for (let i = 0; i < rateNum; i++) {
            finalHTML += '<div class="star"></div>'
        }
    
        return finalHTML
    }

    render() {
        let row = document.querySelector('.posts-row')

        let html = `
        <div class="post">
        <div class="post-header">
            <img src="${this.options.avatar}" alt="" class="person-avatar">

            <div class="person-info">
                <strong>${this.options.name}</strong>
                <span>${this.options.job}</span>
            </div>

            <div class="person-rate">
                ${this.generateStars(this.options.rate)}
            </div>
        </div>

        <div class="post-text">
            ${this.options.text}
        </div>
        </div>
        `

        row.innerHTML += html
    }
}

module.exports = Post