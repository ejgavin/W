async function getMovieData() {
  const ID = new URLSearchParams(window.location.search).get("id");
  if (!ID) return (window.location.href = "/");

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=9a2954cb0084e80efa20b3729db69067&language=en-US`);
    const movie = await res.json();

    window.currentMovie = movie.title;
    document.getElementById("title").textContent = movie.title;
    updateMovieIframe(ID);
  } catch (err) {
    console.error("Error loading movie:", err);
    document.getElementById("title").textContent = "Error loading movie.";
  }
}

function updateMovieIframe(ID) {
  const source = document.getElementById("sourceSelector").value;
  const title = window.currentMovie;
  let src = "";

  switch (source) {
    case "1":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/window/?destination=https://vidfast.pro/movie/${ID}?autoPlay=true`;
      break;
    case "2":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/movie/${ID}?autoPlay=true&episodeSelector=false`;
      break;
    case "3":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${title}/movie`;
      break;
  }

  document.getElementById("iframe").src = src;
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const ID = new URLSearchParams(window.location.search).get("id");
  updateMovieIframe(ID);
});

document.addEventListener("DOMContentLoaded", getMovieData);

