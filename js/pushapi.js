const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const fullTIme = document.querySelector('#currentTime')
const durationTime = document.querySelector('#durationTime')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progressContainer')

const getMusic = async () => {

    try {
        const results = await fetch("./data/music.json")
        const data = await results.json()
        const musics = data.Music
        return musics

    }catch (err) {
        console.log(err)
    }
}

// Load music
const musicContainer = document.querySelector('.music-list')

window.addEventListener("DOMContentLoaded", async function() {
 

    const musicTotal = document.querySelector('.total')
    const music = await getMusic()
    musicTotal.innerHTML = `(${music.length})`
    setMusic(music)
    displayMusicItems(music)
})

const displayMusicItems = items => {
    let displayMusic = items.map(music => {

        let data = `<div class="music">
                  <div class="music-header">
                      <h4 class="music-title">${music.title}</h4>
                      <p class="music-subtitle">
                          ${music.artist}
                      </p>
                  </div>
                  <div class="music-icons">
                      <i class="ti-music"></i>
                  </div>
              </div>`

        return data
    })

    displayMusic = displayMusic.join("")
    if (musicContainer) {
        musicContainer.innerHTML = displayMusic
    }

}


function setMusic(items) {
    audio.src = `${items[0].location}.mp3`
}

function runtime(e) {
    const {duration, currentTime} = e.srcElement
    fullTIme.textContent = (currentTime / 100).toFixed(2)
    durationTime.textContent = (duration / 100).toFixed(2)
}



audio.addEventListener('timeupdate', runtime)

