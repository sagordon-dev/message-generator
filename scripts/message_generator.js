const nounList = [
  "fish",
  "sock",
  "tree",
  "book",
  "frisbee",
  "rug",
  "pillow",
  "tire",
  "flower",
  "ice",
  "truck",
  "plate",
  "egg",
  "blanket",
  "bananna",
  "candle",
  "houseplant",
  "microwave",
  "painting",
  "sock",
];
const pluralNounList = [
  "fishes",
  "socks",
  "trees",
  "books",
  "frisbees",
  "rugs",
  "pillows",
  "tires",
  "flowers",
  "ice",
  "trucks",
  "plates",
  "eggs",
  "blankets",
  "banannas",
  "candles",
  "houseplants",
  "microwaves",
  "paintings",
  "socks",
];
const verbList = [
  "run",
  "skip",
  "hop",
  "jump",
  "walk",
  "eat",
  "drink",
  "send",
  "slurp",
  "gallop",
  "sweep",
  "wrestle",
  "burp",
  "fall",
  "crawl",
  "attack",
  "drop",
  "sing",
  "dance",
  "yodel",
];
const ingVerbList = [
  "running",
  "skipping",
  "hopping",
  "jumping",
  "walking",
  "eating",
  "drinking",
  "sending",
  "slurping",
  "galloping",
  "sweeping",
  "wrestling",
  "burping",
  "falling",
  "crawling",
  "attacking",
  "dropping",
  "singing",
  "dancing",
  "yodeling",
];
const adjectiveList = [
  "flakey",
  "old",
  "blue",
  "green",
  "red",
  "transparent",
  "beautiful",
  "fluffy",
  "new",
  "sturdy",
  "soft",
  "crispy",
  "purple",
  "crusty",
  "spikey",
  "wet",
  "good",
  "scary",
  "tall",
  "colorful",
];

const randomNumberGenerator = (num) => {
  let randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
};

const randomArray = (array) => {
  return array[randomNumberGenerator(array.length)];
};

const arcadeMadLibCreator = () => {
  document.getElementById(
    "message1"
  ).innerHTML = `When I go to the arcade with my <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span> 
  there are lots of games to play. I spend lots of time there with my friends. 
  In the game X-Men you can be different <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span>. 
  The point of the game is to <span class="verb">${randomArray(
    verbList
  )}</span> every robot. 
  You also need to save people. Then you can go to the next level.<br><br>
    
    In the game Star Wars you are Luke Skywalker and you try to destroy every 
  <span class="noun">${randomArray(
    nounList
  )}</span>. In a car racing/motorcycle racing game 
  you need to beat every computerized vehicle that you are 
  <span class="verb">${randomArray(verbList)}</span> against.<br><br>

    There are a whole lot of other cool games. When you play some games you win 
  <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span> for certain scores. Once you're 
  done you can cash in your tickets to get a big <span class="noun">${randomArray(
    nounList
  )}</span>. 
  You can save your <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span> for another time. 
  When I went to this arcade I didn't believe how much fun it would be. So far I 
  have had a lot of fun every time I've been to this great arcade!`;
};

const vacationMadLibCreator = () => {
  document.getElementById(
    "message2"
  ).innerHTML = `A vacation is when you take a trip to some <span class="adjective">${randomArray(
    adjectiveList
  )}</span> place
  with your <span class="adjective">${randomArray(
    adjectiveList
  )}</span> family. Usually you go to some place
  that is near a/an <span class="noun">${randomArray(
    nounList
  )}</span> or up on a/an <span class="noun>${randomArray(nounList)}</span>.
  A good vacation place is one where you can ride <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span>
  or play <span class="noun">${randomArray(
    nounList
  )}</span> <span class="noun">${randomArray(
    nounList
  )}</span> or go hunting for <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span>. I like
  to spend my time <span class="verb">${randomArray(
    verbList
  )}</span> or <span class="verb">${randomArray(verbList)}</span>.
  When parents go on a vacation, they spend their time eating
  three <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span> a day, and fathers play golf, and mothers
  sit around <span class="ing-verb">${randomArray(
    ingVerbList
  )}</span>. Last summer, my little brother
  fell in a/an <span class="verb">${randomArray(
    verbList
  )}</span> and got poison <span class="noun">${randomArray(
    nounList
  )}</span> all
  over his <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span>. My family is going to go to (the)
  <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span>, and I will practice <span class="verb">${randomArray(
    verbList
  )}</span>. Parents
  need vacations more than kids because parents are always very
  <span class="adjective">${randomArray(
    adjectiveList
  )}</span> and because they have to work ${Math.ceil(Math.random() * 24)}
  hours every day all year making enough <span class="plural-noun">${randomArray(
    pluralNounList
  )}</span> to pay
  for vacation.`;
};
