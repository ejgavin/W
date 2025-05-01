async function getTVShowData() {
  const params = new URLSearchParams(window.location.search);
  const ID = params.get("id");
  let season = params.get("s") || 1;
  let episode = params.get("e") || 1;

  if (!ID) return (window.location.href = "/");

  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
    const show = await res.json();

    window.currentShow = show.name;
    populateDropdowns(show.seasons, season, episode, ID);
    updateTitleAndIframe(ID, season, episode);
  } catch (err) {
    console.error("Error loading show:", err);
    document.getElementById("title").textContent = "Error loading show.";
  }
}

function populateDropdowns(seasons, currentSeason, currentEpisode, ID) {
  const seasonSelector = document.getElementById("seasonSelector");
  seasonSelector.innerHTML = "";

  seasons.forEach(s => {
    if (s.name !== "Specials") {
      const opt = new Option(s.name, s.season_number);
      seasonSelector.appendChild(opt);
    }
  });

  seasonSelector.value = currentSeason;
  seasonSelector.onchange = () => {
    document.getElementById("episodeSelector").innerHTML = "";
    loadEpisodes(ID, seasonSelector.value);
  };

  loadEpisodes(ID, currentSeason, currentEpisode);
}

async function loadEpisodes(ID, seasonNumber, currentEpisode = 1) {
  const url = `https://api.themoviedb.org/3/tv/${ID}/season/${seasonNumber}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`;
  try {
    const res = await fetch(url);
    const season = await res.json();

    const episodeSelector = document.getElementById("episodeSelector");
    episodeSelector.innerHTML = "";

    season.episodes.forEach(ep => {
      const opt = new Option(`Episode ${ep.episode_number}: ${ep.name}`, ep.episode_number);
      episodeSelector.appendChild(opt);
    });

    episodeSelector.value = currentEpisode;
    episodeSelector.onchange = () => updateTitleAndIframe(ID, seasonNumber, episodeSelector.value);
    updateTitleAndIframe(ID, seasonNumber, currentEpisode);
  } catch (err) {
    console.error("Error loading episodes:", err);
  }
}

function updateTitleAndIframe(ID, season, episode) {
  const source = document.getElementById("sourceSelector").value;
  const name = window.currentShow;
  document.getElementById("title").textContent = `${name} - S${season}E${episode}`;

  let src = "";
  switch (source) {
    case "1":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${name}&season=${season}&episode=${episode}`;
      break;
    case "2":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/tv/${ID}/${season}/${episode}?autoPlay=true&episodeSelector=false`;
      break;
    case "3":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://vidfast.pro/tv/${ID}/${season}/${episode}?autoPlay=true`;
      break;
  }

  document.getElementById("iframe").src = src;
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const ID = new URLSearchParams(window.location.search).get("id");
  const season = document.getElementById("seasonSelector").value;
  const episode = document.getElementById("episodeSelector").value;
  updateTitleAndIframe(ID, season, episode);
});

document.addEventListener("DOMContentLoaded", getTVShowData);

