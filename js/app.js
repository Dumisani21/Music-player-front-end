const change = document.querySelectorAll('.row-section li')


function reset() {
    for (let i = 0; i < change.length; i++) {
    change[i].classList.remove('item-selection')
}

}

change.forEach((item) => {
    item.addEventListener('click', () => {
        reset()        
        item.classList.add('item-selection')
    })
})


