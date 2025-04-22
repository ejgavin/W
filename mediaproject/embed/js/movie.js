async function loadMovie() {
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
    updateMovie(movieID);
  } catch (error) {
    console.error("Error loading movie:", error);
    document.getElementById("title").innerText = "Error loading movie.";
  }
}

function updateMovie(movieID) {
  const source = document.getElementById("sourceSelector").value;
  document.getElementById("title").innerText = window.currentMovie;

  let src = "";
  switch (source) {
    case "1":
      src = `https://player.videasy.net/movie/${movieID}?autoPlay=true&episodeSelector=false`;
      break;
    case "2":
      src = `https://vidsrc.su/embed/movie/${movieID}`;
      break;
    case "3":
      src = `https://vidjoy.pro/embed/movie/${movieID}?adFree=true`;
      break;
    case "4":
      src = `https://vidfast.pro/movie/${movieID}?autoPlay=true`;
      break;
  }

  document.getElementById("iframe").src = src;
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const params = new URLSearchParams(window.location.search);
  const movieID = params.get("id");
  updateMovie(movieID);
});

document.addEventListener("DOMContentLoaded", loadMovie);

