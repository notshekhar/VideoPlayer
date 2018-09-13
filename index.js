let player = document.querySelector('.player')
let video = document.querySelector('.videoPlayer')
let progress = document.querySelector('.progress')
let progressBar = document.querySelector('.progress_line')
let toggle = document.querySelector('.toggle')
let skip = document.querySelectorAll('[data-skip]')
let range = document.querySelectorAll('.playerslider')
let buffer = document.querySelector('.downloaded')

function togglePlay(){
  let method = video.paused ? 'play' : 'pause'
  video[method]()
}
function updateButton(){
  let icon = video.paused ? '►' : '❚❚'
  // console.log(icon)
  toggle.innerText = icon
}


video.onclick = () => {
  togglePlay()
}
video.onplay = () => {
  updateButton()
}
video.onpause = () => {
  updateButton()
}
toggle.onclick = () => {
  togglePlay()
}
skip.forEach(s => {
  s.onclick = () => {
    let timeskip = s.dataset.skip
    video.currentTime += parseFloat(timeskip)
  }
})
range.forEach(r => {
  r.onchange = () =>{
    video[r.name] = r.value
  }
})

video.ontimeupdate = () => {
  let percentage = (video.currentTime/video.duration)*100
  progressBar.style.flexBasis = `${percentage}%`
  let buff = video.buffered.end(0) / video.seekable.end(0) * 100
  buffer.style.flexBasis = `${buff}%`
}
