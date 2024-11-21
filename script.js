const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const progress = document.getElementById('progress');
const progressContainer = document.querySelector('.progress-container');

function playSong() {
  audio.play();
  playBtn.textContent = '⏸'; // Chuyển nút thành "Pause"
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = '▶️'; // Chuyển nút thành "Play"
}

function togglePlayPause() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${percent}%`;
}

function setProgress(e) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
