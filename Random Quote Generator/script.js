const container = document.querySelector('.container');
const quoteBox = document.querySelector('.quoteBox');
const quote = document.querySelector('#quote');

let quotes = [
  `For, each man can do best and excel in only that thing of which he is passionately fond, in which he believes, as I do, that he has the ability to do it, that he is in fact born and destined to do it. <br> <b><i>- Homi J Bhabha</i></b>`,
  `Success can come to you by courageous devotion to the task lying in front of you. <br> <b><i>- C V Raman</i></b>`,
  `Build a strong base. The journey to peaks of excellence requires a strong base camp. <br> <b><i>- CNR Rao</i></b>`,
  `Never stop fighting until you arrive at your destined place — that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realize the great life. <br> <b><i>- APJ Abdul Kalam</i></b>`,
  `He who can listen to the music in the midst of noise can achieve great things. <br> <b><i>- Vikram Sarabhai</i></b>`,
  `"If there has been any success in my life, that was built on the unshakable foundation of failure…" <br> <b><i> - JC Bose</i></b>`,

]

function showQuote() {
  let genQuoteIndex = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[genQuoteIndex];
}