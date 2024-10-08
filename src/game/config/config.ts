const config = {
  width: 800,
  height: 500,
};

let s = 1;
const p = [0, 0];

if (window) {
  const portrait = window.matchMedia('(orientation: portrait)');

  portrait.addEventListener('change', function (e) {
    window.location.reload();
    if (e.matches) {
      // Portrait mode
    } else {
      // Landscape
    }
  });
}

if (window) {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('fullscreen') == 'true') {
    if (window.innerWidth / window.innerHeight < 1.6) {
      s = window.innerWidth / config.width;
    } else {
      s = window.innerHeight / config.height;
    }

    if (s > 1.4) {
      s = 1.4;
      p[0] = (window.innerHeight - config.height * s) / 2 / s;
      p[1] = (window.innerWidth - config.width * s) / 2 / s;
    } else {
      if (window.innerWidth / window.innerHeight < 1.6) {
        p[0] = (window.innerHeight - config.height * s) / 2 / s;
      } else {
        p[1] = (window.innerWidth - config.width * s) / 2 / s;
      }
    }
  } else if (window.innerWidth < 1010) {
    s = (window.innerWidth - (window.innerWidth * 0.15 + 64)) / config.width;
  }
}

export const scalefactor = s;
export const pfactor = p;

export default config;
