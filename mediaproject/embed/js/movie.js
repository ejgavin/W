async function getMovieData() {
  const params = new URLSearchParams(window.location.search);
  const movieID = params.get("id");

  if (!movieID) {
    window.location.href = "/";
    return;
  }

  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`;

  try {
    const response = await fetch(url);
    const movie = await response.json();

    window.currentMovie = movie.title;
    updateTitleAndIframe(movieID);
  } catch (error) {
    console.error("Error fetching movie data:", error);
    document.getElementById("title").innerText = "Error loading movie.";
  }
}

function updateTitleAndIframe(movieID) {
  const source = document.getElementById("sourceSelector").value;
  document.getElementById("title").innerText = window.currentMovie;

  const movieNameEncoded = encodeURIComponent(window.currentMovie);
  let src = "";

  switch (source) {
    case "1":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${movieNameEncoded}`;
      break;
    case "2":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/movie/${movieID}?autoPlay=true&episodeSelector=false`;
      break;
  }

  document.getElementById("iframe").src = src;
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const params = new URLSearchParams(window.location.search);
  const movieID = params.get("id");
  updateTitleAndIframe(movieID);
});

document.addEventListener("DOMContentLoaded", getMovieData);

