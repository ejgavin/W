const urlParams = new URLSearchParams(window.location.search);
const tvID = urlParams.get("id");
const showName = urlParams.get("name");

const seasonSelector = document.getElementById("seasonSelector");
const episodeSelector = document.getElementById("episodeSelector");
const sourceSelector = document.getElementById("sourceSelector");
const iframe = document.getElementById("iframe");
const title = document.getElementById("title");

let seasonsData = [];

async function fetchSeasons() {
  const response = await fetch(`https://api.themoviedb.org/3/tv/${tvID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
  const data = await response.json();
  title.textContent = data.name;
  seasonsData = data.seasons;

  seasonSelector.innerHTML = '<option value="">Choose Season</option>';
  seasonsData.forEach((season) => {
    if (season.season_number > 0) {
      const option = document.createElement("option");
      option.value = season.season_number;
      option.textContent = `Season ${season.season_number}`;
      seasonSelector.appendChild(option);
    }
  });
}

seasonSelector.addEventListener("change", async () => {
  const seasonNumber = seasonSelector.value;
  if (!seasonNumber) return;

  const response = await fetch(`https://api.themoviedb.org/3/tv/${tvID}/season/${seasonNumber}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
  const data = await response.json();

  episodeSelector.innerHTML = '<option value="">Choose Episode</option>';
  data.episodes.forEach((episode) => {
    const option = document.createElement("option");
    option.value = episode.episode_number;
    option.textContent = `Episode ${episode.episode_number} - ${episode.name}`;
    episodeSelector.appendChild(option);
  });
});

episodeSelector.addEventListener("change", () => {
  updateIframe();
});

sourceSelector.addEventListener("change", () => {
  updateIframe();
});

function updateIframe() {
  const season = seasonSelector.value;
  const episode = episodeSelector.value;
  const source = sourceSelector.value;

  if (!season || !episode) return;

  let src = "";

  switch (source) {
    case "1": // Videasy (now Source 1)
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/tv/${tvID}/${season}/${episode}?autoPlay=true&episodeSelector=false`;
      break;
    case "2": // FlixHQ (now Source 2)
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${encodeURIComponent(showName)}&season=${season}&episode=${episode}`;
      break;
  }

  iframe.src = src;
}

