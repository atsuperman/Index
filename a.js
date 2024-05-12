
// a.js

// Set trackUrls as a global variable
const trackUrls = [
  "Nimir_Nenjil_Maamazhai_Video_Udhayanidhi_Stalin_Namitha_k5xRIKbW2t4.mp3",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Boom Chakala .mp3?v=1714923647324",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Thannanthani kattukulla .mp3?v=1714915753431",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Theendai mei theendai .mp3?v=1714915698132",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Moonu mulam .mp3?v=1714915650285",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Annakili nee vadi .mp3?v=1714915594186",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Annakikli nee 2 .mp3?v=1714915565594",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Ponnu oruthi chumma .mp3?v=1714915673759",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Madha Madhannu .mp3?v=1714915547924",
  "https://cdn.glitch.global/fdbaff0e-6af5-4a23-87cc-fb59b12fec81/🎼 Vazha Thoppukulla .mp3?v=1714901739948",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Lajjavathiye .mp3?v=1714888562865",
  "https://cdn.glitch.global/1780eae4-2681-418a-b256-59d3398b90a7/🎼 Unthan Vizhi Munai 💿 4 student's.mp3?v=1714884720589",
];

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


