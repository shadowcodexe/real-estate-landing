let Post = require('./src/js/Post')
let Residence = require('./src/js/Residence')
let Slider = require('./src/js/Slider')
let menuStatus = false

const posts = [
    {
        avatar: 'src/img/avatar.svg',
        name: 'Kim Davids',
        job: 'Banker',
        rate: '4',
        text: 'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find '
    },
    {
        avatar: 'src/img/avatar.svg',
        name: 'Kim Davids',
        job: 'Banker',
        rate: '5',
        text: 'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find '
    },
    {
        avatar: 'src/img/avatar.svg',
        name: 'Kim Davids',
        job: 'Banker',
        rate: '2',
        text: 'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find '
    },
    {
        avatar: 'src/img/avatar.svg',
        name: 'Kim Davids',
        job: 'Banker',
        rate: '4',
        text: 'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find '
    },
    {
        avatar: 'src/img/avatar.svg',
        name: 'Kim Davids',
        job: 'Banker',
        rate: '3',
        text: 'This is where you can find a dream home of your choice without stThis is where you can find a dream home of your choice without stressresschoice without stThis is where you can find '
    }
]

posts.forEach(el => {
    let newPost = new Post(el)

    newPost.render()
})

const residences = [
    {
        src: 'src/img/res1.png',
        location: 'Agoda, surulere lagos',
        beds: '4',
        size: '10x10',
        square: '2000',
        price: '750,000,000',
    },
    {
        src: 'src/img/res2.png',
        location: 'Agoda, surulere lagos',
        beds: '4',
        size: '10x10',
        square: '2000',
        price: '750,000,000',
    },
    {   
        src: 'src/img/res3.png',
        location: 'Agoda, surulere lagos',
        beds: '4',
        size: '10x10',
        square: '2000',
        price: '750,000,000',
    }

]

residences.forEach(el => {
    let newResidence = new Residence(el)
    newResidence.render()
})

const sliders = [
    {
        selector: '.carousel',
        options: {
            buttonsSelector: '[data-for="carousel"]'
        }
    },
    {
        selector: '.posts-row',
        options: {
            buttonsSelector: '[data-for="posts-row"]'
        }
    }
]
    
sliders.forEach(el => {
    let newSlider = new Slider(el.selector,el.options)
    newSlider.renderButtons()
})

const hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventListener('click',menuToggle)

function menuToggle() {
    let header = document.querySelector('.header')
    let headerContainer = header.querySelector('.container')
    let nav = document.querySelector('.nav')

    let menuItemFirst = hamburgerMenu.querySelector('[data-line="first"]')
    let menuItemSecond = hamburgerMenu.querySelector('[data-line="second"]')
    let menuItemThird = hamburgerMenu.querySelector('[data-line="third"]')

    const style = (par1,par2,par3,par4) => {
        menuItemFirst.style.transform = `rotate(${par1}deg)`
        menuItemSecond.style.opacity = par2
        menuItemThird.style.marginTop = `${par3}px`
        menuItemThird.style.transform = `rotate(${par4}deg)`
    }

    if (!menuStatus) {
        menuStatus = true

        style(45,0,'-21','-45')
        nav.style.display = 'flex'
        headerContainer.style.alignItems = 'start'
    } else {
        menuStatus = false

        style('0',1,0,'0')
        nav.style.display = 'none'
        headerContainer.style.alignItems = 'center'
    }
}
