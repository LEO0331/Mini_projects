const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        pauseSound()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function pauseSound() {//pause all songs, even though not playing
    sounds.forEach(sound => {
        const songs = document.getElementById(sound)
        songs.pause()
        songs.currenTime = 0
    })
}