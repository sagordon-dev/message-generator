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
}

const arcadeMadLibCreator = () => {
  let arcadeMadLib = `    When I go to the arcade with my ${randomArray(pluralNounList)} 
  there are lots of games to play. I spend lots of time there with my friends. 
  In the game X-Men you can be different ${randomArray(pluralNounList)}. 
  The point of the game is to ${randomArray(verbList)} every robot. 
  You also need to save people. Then you can go to the next level.
    
    In the game Star Wars you are Luke Skywalker and you try to destroy every 
  ${randomArray(nounList)}. In a car racing/motorcycle racing game 
  you need to beat every computerized vehicle that you are 
  ${randomArray(ingVerbList)} against.

    There are a whole lot of other cool games. When you play some games you win 
  ${randomArray(pluralNounList)} for certain scores. Once you're 
  done you can cash in your tickets to get a big ${randomArray(nounList)}. 
  You can save your ${randomArray(pluralNounList)} for another time. 
  When I went to this arcade I didn't believe how much fun it would be. So far I 
  have had a lot of fun every time I've been to this great arcade! \n`;

  return arcadeMadLib;
};

const vacationMadLibCreator = () => {
  let vacationMadLib = `    A vacation is when you take a trip to some ${randomArray(adjectiveList)} place
  with your ${randomArray(adjectiveList)} family. Usually you go to some place
  that is near a/an ${randomArray(nounList)} or up on a/an ${randomArray(nounList)}.
  A good vacation place is one where you can ride ${randomArray(pluralNounList)}
  or play ${randomArray(nounList)} or go hunting for ${randomArray(pluralNounList)}. I like
  to spend my time ${randomArray(ingVerbList)} or ${randomArray(ingVerbList)}.
  When parents go on a vacation, they spend their time eating
  three ${randomArray(pluralNounList)} a day, and fathers play golf, and mothers
  sit around ${randomArray(ingVerbList)}. Last summer, my little brother
  fell in a/an ${randomArray(nounList)} and got poison ${randomArray(nounList)} all
  over his ${randomArray(pluralNounList)}. My family is going to go to (the)
  ${randomArray(pluralNounList)}, and I will practice ${randomArray(ingVerbList)}. Parents
  need vacations more than kids because parents are always very
  ${randomArray(adjectiveList)} and because they have to work ${Math.ceil(Math.random() * 24)}
  hours every day all year making enough ${randomArray(pluralNounList)} to pay
  for vacation. \n`

  return vacationMadLib;
}

console.log(arcadeMadLibCreator());
console.log(vacationMadLibCreator());
