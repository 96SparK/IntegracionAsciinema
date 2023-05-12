import * as AsciinemaPlayer from 'asciinema-player';
const player = AsciinemaPlayer.create('./STORAGE/ascii_windows.cast', document.getElementById('demo'));

player.play();