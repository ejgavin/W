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
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://flixhq-gilt.vercel.app/play?name=${encodeURIComponent(title)}`;
      break;
    case "2":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://player.videasy.net/movie/${ID}?autoPlay=true&episodeSelector=false`;
      break;
    case "3":
      src = `https://ejgavin.github.io/W/windows2/?destination=https://ejgavin.github.io/W/windows/?destination=https://vidfast.pro/movie/${ID}?autoPlay=true`;
      break;
  }

  document.getElementById("iframe").src = src;
}

function openFullscreen() {
  const iframe = document.getElementById("iframe");
  const url = iframe.src;
  const newTab = window.open('about:blank', '_blank');
  const doc = newTab.document;

  doc.write(`
    <html>
    <head>
      <title>Fullscreen</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          background-color: black;
          height: 100%;
          overflow: hidden;
        }
        #credit {
          background: black;
          color: white;
          padding: 5px;
          font-size: 14px;
          text-align: center;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
        iframe {
          position: absolute;
          top: 25px;
          left: 0;
          width: 100%;
          height: calc(100% - 25px);
          border: none;
        }
      </style>
    </head>
    <body>
      <div id="credit">Credit to Stuff Google Site</div>
      <iframe src="${url}" allowfullscreen></iframe>
    </body>
    </html>
  `);
}

document.getElementById("sourceSelector").addEventListener("change", () => {
  const ID = new URLSearchParams(window.location.search).get("id");
  updateMovieIframe(ID);
});

document.addEventListener("DOMContentLoaded", getMovieData);

