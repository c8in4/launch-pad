const buttonContainer = document.querySelector('#buttonContainer')

buttonContainer.addEventListener('click', (event) => {
    if (event.target.type == 'button') {
        let sound = event.target.dataset.sound
        playSound(sound)
    }
})

function playSound(sound) {
    const audio = document.querySelector(`audio[data-sound='${sound}']`)
    audio.currentTime = 0
    audio.play()
}