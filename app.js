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

const randomMessageGenerator = () => {
  const randomNumberGenerator = (num) => {
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
  };

  let arcadeMadLib = `When I go to the arcade with my ${
    pluralNounList[randomNumberGenerator(20)]
  } 
there are lots of games to play. I spend lots of time there with my friends. 
In the game X-Men you can be different ${
    pluralNounList[randomNumberGenerator(20)]
  }. 
The point of the game is to ${verbList[randomNumberGenerator(20)]} every robot. 
You also need to save people. Then you can go to the next level.
    
In the game Star Wars you are Luke Skywalker and you try to destroy every 
${nounList[randomNumberGenerator(20)]}. In a car racing/motorcycle racing game 
you need to beat every computerized vehicle that you are 
${ingVerbList[randomNumberGenerator(20)]} against.

There are a whole lot of other cool games. When you play some games you win 
${pluralNounList[randomNumberGenerator(20)]} for certain scores. Once you're 
done you can cash in your tickets to get a big ${
    nounList[randomNumberGenerator(20)]
  }. 
You can save your ${
    pluralNounList[randomNumberGenerator(20)]
  } for another time. 
When I went to this arcade I didn't believe how much fun it would be. So far I 
have had a lot of fun every time I've been to this great arcade!`;

  return arcadeMadLib;
};

console.log(randomMessageGenerator());
