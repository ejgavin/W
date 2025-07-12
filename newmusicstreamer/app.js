window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-HWSLDV5486');

const SEARCH_EP = "https://ejgsapis.vercel.app/api/deezer?q=";
const LYRIC_EP = "https://lrclib.net/api/get";

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const trackTitle = document.getElementById("trackTitle");
const artistName = document.getElementById("artistName");
const albumCover = document.getElementById("albumCover");
const playPauseBtn = document.getElementById("playPause");
const volumeBtn = document.getElementById("volumeBtn");
const seekBar = document.getElementById("seekbar");
const progressBar = document.getElementById("progress");
const currentTimeSpan = document.getElementById("currentTime");
const remainingTimeSpan = document.getElementById("remainingTime");
const lyricsToggle = document.getElementById("lyricsToggle");
const playerInfo = document.getElementById("playerInfo");
const lyricsInfo = document.getElementById("lyricsInfo");
const lyricsSongTitle = document.getElementById("lyricsSongTitle");
const lyricsArtistName = document.getElementById("lyricsArtistName");
const lyricsContent = document.getElementById("lyricsContent");

let showingLyrics = false;
let isMuted = false;
let isPlaying = false;
let isDragging = false;
let isLooping = false;
let currentTrack = {
  title: "Not Playing",
  artist: "Not Playing",
  artwork: "https://raw.githubusercontent.com/voucan-us4/music-player/refs/heads/main/empty-art.png",
};

const colorThief = new ColorThief();

let currentColor = { r: 115, g: 98, b: 86 };
let targetColor = { r: 115, g: 98, b: 86 };
let animationId = null;

function applyColors(color) {
  if (!color || !Array.isArray(color) || color.length < 3) return;

  targetColor = { r: color[0], g: color[1], b: color[2] };

  if (animationId) cancelAnimationFrame(animationId);

  applyAnimation();
}

function applyAnimation() {
  const dr = (targetColor.r - currentColor.r) * 0.1;
  const dg = (targetColor.g - currentColor.g) * 0.1;
  const db = (targetColor.b - currentColor.b) * 0.1;

  currentColor.r += dr;
  currentColor.g += dg;
  currentColor.b += db;

  const r = Math.round(currentColor.r);
  const g = Math.round(currentColor.g);
  const b = Math.round(currentColor.b);

  const darkenAmount = 30;
  const endR = Math.max(0, r - darkenAmount);
  const endG = Math.max(0, g - darkenAmount);
  const endB = Math.max(0, b - darkenAmount);

  document.documentElement.style.setProperty("--bg-start", `rgb(${r}, ${g}, ${b})`);
  document.documentElement.style.setProperty("--bg-end", `rgb(${endR}, ${endG}, ${endB})`);

  const tolerance = 0.5;
  if (
    Math.abs(targetColor.r - currentColor.r) > tolerance ||
    Math.abs(targetColor.g - currentColor.g) > tolerance ||
    Math.abs(targetColor.b - currentColor.b) > tolerance
  ) {
    animationId = requestAnimationFrame(applyAnimation);
  } else {
    currentColor = { ...targetColor };
  }
}

const audioPlayer = new Audio();

searchInput.addEventListener("input", () => {
  clearTimeout(window.searchTimeout);
  window.searchTimeout = setTimeout(() => {
    const query = searchInput.value.trim();
    if (query.length > 1) {
      searchSongs(query);
    } else {
      hideSearchResults();
    }
  }, 500);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    clearTimeout(window.searchTimeout);
    const query = searchInput.value.trim();
    if (query.length > 1) searchSongs(query);
  }
});

function searchSongs(query) {
  searchResults.innerHTML = '<div class="loading">Searching...</div>';
  showSearchResults();

  const url = `${SEARCH_EP}${encodeURIComponent(query)}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("Deezer search results:", data);
      const results = data.data || data;
      displaySearchResults(results);
    })
    .catch((error) => {
      console.error("Error searching Deezer:", error);
      searchResults.innerHTML = '<div class="loading">Search failed. Please try again.</div>';
    });
}

function displaySearchResults(results) {
  if (!results || results.length === 0) {
    searchResults.innerHTML = '<div class="loading">No results found</div>';
    return;
  }

  searchResults.innerHTML = "";

  results.forEach((item) => {
    if (!item.title || !item.artist?.name) return;

    const artworkUrl = item.album?.cover_small || "";

    const resultElement = document.createElement("div");
    resultElement.className = "result-item";
    resultElement.innerHTML = `
      <div class="result-img">
        <img src="${artworkUrl}" alt="${item.title}" crossorigin="anonymous">
      </div>
      <div class="result-info">
        <div class="result-title">${item.title}</div>
        <div class="result-artist">${item.artist.name}</div>
      </div>
    `;

    resultElement.addEventListener("click", () => {
      playSong(item);
      hideSearchResults();
      searchInput.value = "";
    });

    searchResults.appendChild(resultElement);
  });
}

function playSong(track) {
  currentTrack = {
    title: track.title,
    artist: track.artist.name,
    artwork: track.album?.cover_big || track.album?.cover_medium || track.album?.cover_small,
  };

  trackTitle.textContent = currentTrack.title;
  artistName.textContent = currentTrack.artist;
  lyricsSongTitle.textContent = currentTrack.title;
  lyricsArtistName.textContent = currentTrack.artist;

  if (showingLyrics) fetchLyrics(currentTrack.artist, currentTrack.title);

  albumCover.crossOrigin = "anonymous";
  albumCover.src = currentTrack.artwork;

  albumCover.onload = () => {
    try {
      const dominantColor = colorThief.getColor(albumCover);
      applyColors(dominantColor);
    } catch (e) {
      console.error("Color extraction failed:", e);
    }
  };

  const searchQuery = encodeURIComponent(`${currentTrack.title} - ${currentTrack.artist}`);
  const qobuzUrl = `https://ejgsapis.vercel.app/api/qobuz?q=${searchQuery}`;
  const deezerMusicUrl = `https://ejgsapis.vercel.app/api/deezermusic?q=${searchQuery}`;

  // Try Qobuz first
  audioPlayer.src = qobuzUrl;
  audioPlayer.play().catch((err) => {
    console.warn("Qobuz stream failed, falling back to DeezerMusic", err);
    // fallback to DeezerMusic
    audioPlayer.src = deezerMusicUrl;
    audioPlayer.play().catch((err2) => {
      console.error("DeezerMusic stream also failed", err2);
      alert("Unable to play this track at the moment.");
    });
  });

  isPlaying = true;
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
}

function fetchLyrics(artist, title) {
  lyricsSongTitle.textContent = title;
  lyricsArtistName.textContent = artist;
  lyricsContent.textContent = "Loading lyrics...";

  const cleanArtist = encodeURIComponent(artist.trim());
  const cleanTitle = encodeURIComponent(title.trim());

  fetch(`${LYRIC_EP}?artist_name=${cleanArtist}&track_name=${cleanTitle}`)
    .then((response) => {
      if (!response.ok) throw new Error("Lyrics not found");
      return response.json();
    })
    .then((data) => {
      if (data.syncedLyrics) {
        const lines = data.syncedLyrics
          .trim()
          .split("\n")
          .map((line) => {
            const match = line.match(/^\[(\d+):(\d+\.\d+)](.*)$/);
            if (match) {
              const time = parseInt(match[1], 10) * 60 + parseFloat(match[2]);
              const text = match[3].trim();
              return { time, text };
            }
            return null;
          })
          .filter(Boolean);

        lyricsContent.innerHTML = lines
          .map((line, index) => `<div class="lyric-line" data-time="${line.time}" id="lyric-${index}">${line.text}</div>`)
          .join("");

        if (window.lyricsSyncInterval) clearInterval(window.lyricsSyncInterval);

        window.lyricsSyncInterval = setInterval(() => {
          const currentTime = audioPlayer.currentTime || 0;
          let activeIndex = -1;

          for (let i = 0; i < lines.length; i++) {
            if (currentTime >= lines[i].time) activeIndex = i;
            else break;
          }

          document.querySelectorAll(".lyric-line").forEach((el, i) => {
            el.classList.remove("active", "prev", "next");
            if (i === activeIndex) {
              el.classList.add("active");
              lyricsContent.scrollTo({
                top: el.offsetTop - lyricsContent.clientHeight / 2 + el.clientHeight / 2,
                behavior: "smooth",
              });
            } else if (i === activeIndex - 1) el.classList.add("prev");
            else if (i === activeIndex + 1) el.classList.add("next");
          });
        }, 300);
      } else if (data.lyrics) {
        const formattedLyrics = data.lyrics.replace(/\n/g, "<br>");
        lyricsContent.innerHTML = formattedLyrics;
      } else {
        lyricsContent.textContent = "No lyrics available.";
      }
    })
    .catch((error) => {
      console.error("Error fetching lyrics:", error);
      lyricsContent.textContent = "No lyrics available.";
    });
}

function updateProgress() {
  if (!audioPlayer || isDragging) return;

  try {
    const duration = audioPlayer.duration || 0;
    const currentTime = audioPlayer.currentTime || 0;
    const percent = (currentTime / duration) * 100;

    progressBar.style.width = percent + "%";

    currentTimeSpan.textContent = formatTime(currentTime);
    remainingTimeSpan.textContent = "-" + formatTime(duration - currentTime);
  } catch (error) {
    console.error("Error updating progress:", error);
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function startSeek(e) {
  if (!audioPlayer) return;
  isDragging = true;
  seekBar.classList.add("active");
  updateSeekPosition(e);
}

function dragSeek(e) {
  if (isDragging) updateSeekPosition(e);
}

function endSeek() {
  if (isDragging) {
    isDragging = false;
    seekBar.classList.remove("active");
  }
}

function updateSeekPosition(e) {
  if (!audioPlayer || !audioPlayer.duration) return;

  const rect = seekBar.getBoundingClientRect();
  const position = (e.clientX - rect.left) / rect.width;
  const percent = Math.min(Math.max(position, 0), 1);

  progressBar.style.width = percent * 100 + "%";
  audioPlayer.currentTime = percent * audioPlayer.duration;
}

function minustenseconds() {
  if (!audioPlayer) return;

  audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10);
}

function minusfiveseconds() {
  if (!audioPlayer) return;

  audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 5);
}

function plusfiveseconds() {
  if (!audioPlayer) return;

  audioPlayer.currentTime = Math.min(audioPlayer.currentTime + 5, audioPlayer.duration || 0);
}

function plustenseconds() {
  if (!audioPlayer) return;

  audioPlayer.currentTime = Math.min(audioPlayer.currentTime + 10, audioPlayer.duration || 0);
}

function toggleMute() {
  if (!audioPlayer) return;

  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    volumeBtn.className = "fa-solid fa-volume-high";
    isMuted = false;
  } else {
    audioPlayer.muted = true;
    volumeBtn.className = "fa-solid fa-volume-xmark";
    isMuted = true;
  }
}

function togglePlayback() {
  if (!audioPlayer) return;

  if (audioPlayer.paused) {
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.classList.remove("fa-play");
    playPauseBtn.classList.add("fa-pause");
  } else {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
  }
}

function showSearchResults() {
  searchResults.classList.add("active");
}

function hideSearchResults() {
  searchResults.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (!searchResults.contains(e.target) && e.target !== searchInput) hideSearchResults();
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("backward10")?.addEventListener("click", minustenseconds);
  document.getElementById("backward5")?.addEventListener("click", minusfiveseconds);
  document.getElementById("forward5")?.addEventListener("click", plusfiveseconds);
  document.getElementById("forward10")?.addEventListener("click", plustenseconds);

  playPauseBtn.addEventListener("click", togglePlayback);
  volumeBtn.addEventListener("click", toggleMute);

  seekBar.addEventListener("mousedown", startSeek);
  document.addEventListener("mousemove", dragSeek);
  document.addEventListener("mouseup", endSeek);

  setInterval(updateProgress, 500);

  loopToggle.addEventListener("click", () => {
    isLooping = !isLooping;
    loopToggle.className = isLooping ? "fa-solid fa-repeat-1" : "fa-solid fa-repeat";
    audioPlayer.loop = isLooping;
  });

  audioPlayer.addEventListener("ended", () => {
    isPlaying = false;
    playPauseBtn.classList.remove("fa-pause");
    playPauseBtn.classList.add("fa-play");
    if (isLooping) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    }
  });
});

// Lyrics toggle button event listener (ensure not duplicated)
lyricsToggle.addEventListener("click", () => {
  showingLyrics = !showingLyrics;

  const album = document.getElementById("album");

  if (showingLyrics) {
    playerInfo.style.display = "none";
    album.style.display = "none";
    lyricsInfo.style.display = "flex";

    fetchLyrics(currentTrack.artist, currentTrack.title);

    lyricsToggle.innerHTML = '<i class="lyrics-toggle fa-solid fa-music" data-tooltip="Toggle Lyrics (t)"></i>';
  } else {
    playerInfo.style.display = "flex";
    album.style.display = "flex";
    lyricsInfo.style.display = "none";

    lyricsToggle.innerHTML = '<i class="lyrics-toggle fa-solid fa-align-left" data-tooltip="Toggle Lyrics (t)"></i>';
  }
});

document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  switch (e.key.toLowerCase()) {
    case "m":
      toggleMute();
      break;
    case "t":
      lyricsToggle.click();
      break;
    case "l":
      loopToggle.click();
      break;
    case "k":
    case " ":
      e.preventDefault();
      playPauseBtn.click();
      break;
    case "arrowright":
      plusfiveseconds();
      break;
    case "arrowleft":
      minusfiveseconds();
      break;
  }
});
