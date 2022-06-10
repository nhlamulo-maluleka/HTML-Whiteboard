const board = document.querySelector('.container')
let changeColor = document.querySelector('#colors')
let color = `#000`
let size = 10

const createDrawing = (x, y) => {
    const point = document.createElement('i')
    point.className = 'point'
    point.style.top = `${y}px`
    point.style.left = `${x}px`
    point.style.backgroundColor = color
    point.style.width = `${size}px`
    point.style.height = `${size}px`

    return point;
}

const draw = (e) => {
    let xCoord = 0;
    let yCoord = 0;

    if("ontouchstart" in document.documentElement){
        const { changedTouches } = e
        const { clientX, clientY } = changedTouches[0]
        xCoord = clientX-3
        yCoord = clientY-3
    } else {
        const { clientX, clientY } = e
        xCoord = clientX-10
        yCoord = clientY-12
    }

    board.appendChild(createDrawing(xCoord, yCoord))
}

if("ontouchstart" in document.documentElement){
    board.addEventListener("touchmove", draw)
} else {
    board.addEventListener('mousedown', e => {
        board.addEventListener('mousemove', draw)
    })
    
    board.addEventListener('mouseup', e => {
        board.removeEventListener('mousemove', draw)
    })
}

changeColor.addEventListener('click', e => {
    const newColor = e.target.dataset
    
    if(newColor){
        if(newColor.color !== 'clear' && newColor.color !== 'erase'){
            color = newColor.color
            size = 10
        }
        else if(newColor.color === 'erase'){
            color = 'white';
            size = 30
        } else {
            color = color;
            size = 10
            board.innerHTML = ''
        }
    }
})