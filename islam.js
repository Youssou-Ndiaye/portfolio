const next = document.querySelector(".next");
let text = document.querySelector(".quote");
const quotes = [
  "'Allah is He who created death and life to test you as to which of you is best in deed. Quran 67:2'",
  "'Worldly life is short, so turn to Allah before you return to Allah.' Anonymous",
  `“The bravest heart is the one that stays close to Allah (God), even, when it is in pain.” Anonymous
  `,
  `“Forgive others as quickly as you expect Allah (God) to forgive you.” Anonymous`,
  `“To Allah (God) is your return, all of you, and He will inform you of what you used to do.” Quran 5:105`,
  `“Whoever fears Allah (God), Allah (God) will find a way out for him (from every difficulty) and He will provide for him from sources that he could never have imagined.” Quran 65:2-3`,
  `“The reality of manners is that it results from beautiful character. Thus, manners is the manifestations of the integrity and strength in ones inward personality into action.” Ibn Rajab`,
  `“A busy life makes prayer harder, but prayer makes a busy life easier.” Anonymous`,
  `“And whoever turns away from My remembrance – indeed, he will have a depressed life.” Quran 20:124`,
  `“They plan, and Allah (God) plans. Surely, Allah (God) is the best of planners.” Quran 8:30`,
  `“Allah (God) does not intend to make difficulty for you, but He intends to purify you and complete His favor upon that you may be grateful.” Quran 5:6`,
  `“The best among you are those who have the best manners and best character.” Sahih Bukhari 6029`,
  `“For indeed, with hardship [will be] ease.” Quran 94:5`,
  `“And whoever puts all his trust in Allah (God), then He will suffice him.” Quran 65:3
  `,
  `“The richest of the rich is the one who is not a prisoner to greed.” Ali Ibn Abi Talib (R.A)`,
];
function nextQuote(arr) {
  const randomQ = Math.floor(Math.random() * arr.length);
  const quote = arr[randomQ];

  return quote;
}
const result = nextQuote(quotes);
function randomise() {
  const result = nextQuote(quotes);
  text.innerHTML = result;
  return result;
}
