async function getTVShowData() {
  const params = new URLSearchParams(window.location.search);
  const ID = params.get("id");
  let season = params.get("s") || 1;
  let episode = params.get("e") || 1;

  if (!ID) {
    window.location.href = "/";
    return;
  }

  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
    const show = await response.json();

    window.currentShow = show.name;
    document.getElementById("title").innerText = `${show.name} - S${season}E${episode}`;
    populateDropdowns(show.seasons, season, episode, ID);
  } catch (error) {
    console.error("Error fetching TV show data:", error);
    document.getElementById("title").innerText = "Error loading show.";
  }
}

function populateDropdowns(seasons, currentSeason, currentEpisode, ID) {
  const seasonSelector = document.getElementById("seasonSelector");
  const episodeSelector = document.getElementById("episodeSelector");

  seasonSelector.innerHTML = "";
  seasons.forEach(season => {
    if (season.name !== "Specials") {
      const option = document.createElement("option");
      option.value = season.season_number;
      option.textContent = `Season ${season.season_number}`;
      seasonSelector.appendChild(option);
    }
  });

  seasonSelector.value = currentSeason;

  seasonSelector.addEventListener("change", () => {
    episodeSelector.innerHTML = "";
    document.getElementById("title").innerText = "Loading episodes...";
    loadEpisodes(ID, seasonSelector.value);
  });

  loadEpisodes(ID, currentSeason, currentEpisode);
}

async function loadEpisodes(ID, seasonNumber, currentEpisode = 1) {
  const episodeSelector = document.getElementById("episodeSelector");
  episodeSelector.innerHTML = "";

  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${ID}/season/${seasonNumber}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
    const season = await response.json();

    season.episodes.forEach(episode => {
      const option = document.createElement("option");
      option.value = episode.episode_number;
      option.textContent = `Episode ${episode.episode_number}: ${episode.name}`;
      episodeSelector.appendChild(option);
    });

    episodeSelector.value = currentEpisode;

    episodeSelector.addEventListener("change", () => {
      changeEpisode(ID, seasonNumber, episodeSelector.value);
    });

    changeEpisode(ID, seasonNumber, currentEpisode);
  } catch (error) {
    console.error("Error loading episodes:", error);
    document.getElementById("title").innerText = "Error loading episodes.";
  }
}

function changeEpisode(ID, season, episode) {
  updateTitleAndIframe(ID, season, episode);
}

function updateTitleAndIframe(ID, season, episode) {
  const source = document.getElementById("sourceSelector").value;
  const showName = window.currentShow || "TV Show";
  document.getElementById("title").innerText = `${showName} - S${season}E${episode}`;

  let src = "";

  switch (source) {
    case "1": // Videasy
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/tv/${ID}/${season}/${episode}?autoPlay=true&episodeSelector=false`;
      break;
    case "2": // FlixHQ
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${encodeURIComponent(showName)}&season=${season}&episode=${episode}`;
      break;
  }

  document.getElementById("iframe").src = src;
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const params = new URLSearchParams(window.location.search);
  const ID = params.get("id");
  const season = document.getElementById("seasonSelector").value;
  const episode = document.getElementById("episodeSelector").value;
  updateTitleAndIframe(ID, season, episode);
});

document.addEventListener("DOMContentLoaded", getTVShowData);

