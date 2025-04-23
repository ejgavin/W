const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get("id");
const movieName = urlParams.get("name");

const sourceSelector = document.getElementById("sourceSelector");
const iframe = document.getElementById("iframe");
const title = document.getElementById("title");

async function fetchMovieDetails() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
  const data = await response.json();
  title.textContent = data.title;
}

function updateIframe() {
  const source = sourceSelector.value;
  let src = "";

  switch (source) {
    case "1": // Videasy
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/movie/${movieID}?autoPlay=true&episodeSelector=false`;
      break;
    case "2": // FlixHQ
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${encodeURIComponent(movieName)}`;
      break;
  }

  iframe.src = src;
}

sourceSelector.addEventListener("change", updateIframe);

fetchMovieDetails().then(updateIframe);

