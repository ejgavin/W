
const lsijVersion = 1;

if (window.top === window.self) {
  console.log('[LS Filter] top window: ' + window.location.href);

  function checkCurrentSite() {
    const xhr = new XMLHttpRequest();
    const body = JSON.stringify({
      url: window.location.href
    });
    console.log('[LS Filter] reporting ->' + body);
    const checkUrl = document.location.origin + '/3d2d41d08b6755e0d477851724303711900c123fcbb5728cc6447872acf35789/log';
    xhr.open('POST', checkUrl, true);
    xhr.send(body);
    xhr.onreadystatechange = function () {
      if (this.status === 200 && xhr.responseText) {
        const score = JSON.parse(xhr.responseText);
        console.log('[LS Filter] score ->', score.allow);
        if (score.redirect) {
          updateLocation(score.redirect);
        }
      }
    };
  }

  function updateLocation(url) {
    if (typeof(applyNewLocation) === 'function') {
      if (applyNewLocation() === true) { return; }
    }
    window.location.href = url;
  }

  checkCurrentSite();
  let prevURL = new URL(window.location.href);
  if (prevURL.hostname.match('youtube\.com')) {
    let prevVideo = new URLSearchParams(prevURL.search).get('v');
    let prevSearch = new URLSearchParams(prevURL.search).get('search_query');
    new MutationObserver(function() {
      console.log('[LS Filter] MutationObserver');
      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams(url.search);
      if (video = searchParams.get('v')) {
        if (video === prevVideo) { return; }           
        console.log('[LS Filter] scoring video ->', video);
        prevVideo = video;
        checkCurrentSite();
      } else if (search = searchParams.get('search_query')) {
        if (search === prevSearch) { return; }  
        console.log('[LS Filter] scoring search ->', search);
        prevSearch = search;
        checkCurrentSite();
      }
    }).observe(document, {subtree: true, childList: true});
  }
}


