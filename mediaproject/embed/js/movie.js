async function getMovieData() {
  const params = new URLSearchParams(window.location.search);
  const ID = params.get("id");

  if (!ID) {
    window.location.href = "/";
    return;
  }

  const url = `https://api.themoviedb.org/3/movie/${ID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`;

  try {
    const response = await fetch(url);
    const movie = await response.json();

    window.currentMovie = movie.title;

    updateMovieIframe(ID); // Pass ID, use global title
    document.getElementById("title").innerText = movie.title;
  } catch (error) {
    console.error("Error loading movie:", error);
    document.getElementById("title").innerText = "Error loading movie.";
  }
}

function updateMovieIframe(ID) {
  const source = document.getElementById("sourceSelector").value;
  const title = window.currentMovie;
  let src = "";

  switch (source) {
    case "1": // Videasy
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/movie/${ID}?autoPlay=true&episodeSelector=false`;
      break;

    case "2": // FlixHQ - title only
      const flixUrl = `https://flixhq-gilt.vercel.app/play?name=${title}`;
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=${flixUrl}`;
      break;
  }

  document.getElementById("iframe").src = src;
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const ID = new URLSearchParams(window.location.search).get("id");
  updateMovieIframe(ID);
});

document.addEventListener("DOMContentLoaded", getMovieData);

