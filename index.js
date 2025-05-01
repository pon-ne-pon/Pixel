let CURRENT_COLOR = 'rgb(93, 99, 99)'
let DEFAULT_COLOR = 'rgb(93, 99, 99)'
let FILL_MODE = false

let feild = document.querySelector('.feild')

for (let i = 0; i < 450 ; i += 1){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id' , `${i}`)
    feild.appendChild(cell)
}

let IS_CLICKED = false
document.addEventListener('mouseup' , function(){
    IS_CLICKED =  false
})

document.addEventListener('mousedown' , function(){
    IS_CLICKED = true
})

let cells =  document.querySelectorAll('.cell')

cells.forEach(cel => {
    cel.addEventListener('click' , function(){
        if(FILL_MODE){
            cells.forEach(cell => {
                cell.style.backgroundColor = CURRENT_COLOR
            })
        } else {
            cel.style.backgroundColor = CURRENT_COLOR
        }


        cel.style.backgroundColor = CURRENT_COLOR
    })

    cel.addEventListener('mouseover' , function(){
        if (IS_CLICKED) {
        cel.style.backgroundColor = CURRENT_COLOR
        }
    })
})

let blue = document.querySelector('.blue')
blue.addEventListener('click' , function(){
    CURRENT_COLOR = 'blue'
    document.documentElement.style.cssText = `--cur-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    blue.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"

})

let red = document.querySelector('.red')
red.addEventListener('click' , function(){
    CURRENT_COLOR = 'red'
     document.documentElement.style.cssText = `--cur-color: ${CURRENT_COLOR}`
     document.querySelector('.selected').classList.remove('selected')
    red.classList.add('selected') 
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
})


let green = document.querySelector('.green')
green.addEventListener('click' , function(){
    CURRENT_COLOR = 'green'
    document.documentElement.style.cssText = `--cur-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    green.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
})

let white = document.querySelector('.white')
white.addEventListener('click' , function(){
    CURRENT_COLOR = 'white'
    document.documentElement.style.cssText = `--cur-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    white.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
})

let yellow = document.querySelector('.yellow')
yellow.addEventListener('click' , function(){
    CURRENT_COLOR = 'yellow'
    document.documentElement.style.cssText = `--cur-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    yellow.classList.add('selected')
    FILL_MODE = false
    document.querySelector('.fill').style.border = "none"
})

document.querySelector('.eraser').addEventListener('click' , function(){
    CURRENT_COLOR = DEFAULT_COLOR
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.eraser').classList.add('selected')
}
)
document.querySelector('.fill').addEventListener('click' , function(){
    FILL_MODE = ! FILL_MODE
    if (FILL_MODE) {
        document.querySelector('.fill').style.border = "2px solid rgb(7, 214, 241)"
    } else {
        document.querySelector('.fill').style.border = "none"
    }
    
}
)

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let cover = document.querySelector('.cover')
let feild_cont = document.querySelector('.feild-cont')

let bt = document.querySelector('.bt')
bt.addEventListener('click' , function(e){
    e.preventDefault()
    feild_cont.style.display = 'flex'
    scrollDown()
    setTimeout(function() {cover.style.display = 'none'} , 500)

})

let bbt = document.querySelector('.have')
bbt.addEventListener('click' , function(){
    feild.style.gap = '0'
    domtoimage.toJpeg(feild)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
    setTimeout(function() {feild.style.gap = '0.5px'} , 500)
    

})
