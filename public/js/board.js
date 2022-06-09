const board = document.querySelector('.container')
let changeColor = document.querySelector('#colors')
let color = `green`
let size = 10

const createDrawing = (x, y) => {
    console.log(color)
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
    const { clientX, clientY } = e
    board.appendChild(createDrawing(clientX-10, clientY-12))
}

board.addEventListener('mousedown', e => {
    board.addEventListener('mousemove', draw)
})

board.addEventListener('mouseup', e => {
    board.removeEventListener('mousemove', draw)
})

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
            board.innerHTML = ''
        }
    }
})