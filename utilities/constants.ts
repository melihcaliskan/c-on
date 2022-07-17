
const BASE_API_URL = "http://localhost:3000/api/"
const VERCEL_URL = "https://come-on-group.vercel.app/api/"

const gameSources = {
  starburst: {
    src: "https://comeon-static-test.casinomodule.com/games/starburst_mobile_html/game/starburst_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-41e133d5237c402-EUR&gameId=starburst_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"
  },
  jackhammer: {
    src: "https://comeon-static-test.casinomodule.com/games/jackhammer_mobile_html/game/jackhammer_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-0b3a6e21685c42a-EUR&gameId=jackhammer_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"
  },
  jackandbeanstalk: {
    src: "https://comeon-static-test.casinomodule.com/games/jackandbeanstalk_mobile_html/game/jackandbeanstalk_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-756f72b48bc2493-EUR&gameId=jackandbeanstalk_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"
  },
  deadoralive: {
    src: "https://comeon-static-test.casinomodule.com/games/deadoralive_mobile_html/game/deadoralive_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game-test.casinomodule.com%2F&lang=sv&sessId=DEMO-979bbc939ea9412-EUR&gameId=deadoralive_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"
  },
  twinspin: {
    src: "https://comeon-static-test.casinomodule.com/games/twinspin_mobile_html/game/twinspin_mobile_html.xhtml?server=https%3A%2F%2Fcomeon-game.casinomodule.com%2F&lang=en&sessId=DEMO-c813546a446a412-EUR&gameId=twinspin_not_mobile_sw&operatorId=default&staticsharedurl=http%3A%2F%2Fstatic-shared.casinomodule.com%2Fgameclient_html%2Fdevicedetection%2Fcurrent"
  }
};

const games = [
  {
    "name": "Starburst",
    "description": "Starburst is a high paced slot with some nice new features including a Starburst Wild feature. It has 5-reels and 10-bet lines and Traditional Wilds are replaced with an innovative new Starburst Wild which appear on reels 2, 3 or 4 and expand over the entire reel and remain in place for up to 3 re-spins giving you a much better chance of hitting a HUGE win!",
    "code": "starburst",
    "icon": "images/game-icon/starburst.jpg",
    "categoryIds": [0, 2]
  },
  {
    "name": "Jack Hammer",
    "description": "Jack Hammer is a 25-line, 3-row video slot using 15 independent reels set in the gritty, glamorous underworld of a crime fighting private eye.The game features Sticky Wins, Free Spins and Wild Substitutions.",
    "code": "jackhammer",
    "icon": "images/game-icon/jackhammer.jpg",
    "categoryIds": [0, 1]
  },
  {
    "name": "Jack and the Beanstalk",
    "description": "We is proud to present Jack and the Beanstalk. This game has a new feature called walking wilds which you will find in the main gameplay of this amazing game When a wild symbol is placed on the reels it will travel one reel at a time unti it leaves the left most reel, hence the name walking wilds! There are also in game free spins, where the main feature is to collect keys to unlock the different wild functionalities.",
    "code": "jackandbeanstalk",
    "icon": "images/game-icon/jackandbeanstalk.jpg",
    "categoryIds": [0, 2, 1]
  },
  {
    "name": "Dead or Alive",
    "description": "The Elements slot has an Avalanche meter which increases by one for each successive fall until it reaches the maximum of 4. After 4 successive Avalanches one of the 4 Free Falls Storm modes is triggered. These are the Fire Storm mode, Air Storm mode, Earth Storm mode, and Water Storm mode. The colours of the Avalanche meter match the leading element in the current game round.",
    "code": "deadoralive",
    "icon": "images/game-icon/deadoralive.jpg",
    "categoryIds": [0, 2]
  },
  {
    "name": "Twin Spin",
    "description": "The Twin Spin video slot has a Las Vegas theme brought into the 21st Century! Each spin starts with identical, adjacent twin reels that are linked together. During the spin the twin reels can expand to become triplet, quadruplet or even quintuplet reels. The unique reel synchronising and linking feature that appears on every single spin and the 243 ways to win makes for massive payouts!",
    "code": "twinspin",
    "icon": "images/game-icon/twinspin.jpg",
    "categoryIds": [0, 1]
  }
]

const categories = [
  {
    "id": 0,
    "name": "ALL"
  },
  {
    "id": 1,
    "name": "VIDEO SLOTS"
  },
  {
    "id": 2,
    "name": "SLOT MACHINES"
  }
]

// const AUTH_INITIAL_STATE = {
//   isLoggedIn: false
// }

const AUTH_INITIAL_STATE = {
  "isLoggedIn": true, "name": "Rebecka Awesome", "avatar": "images/avatar/rebecka.jpg", "event": "Last seen gambling on Starburst."
}


export { AUTH_INITIAL_STATE, BASE_API_URL, VERCEL_URL, gameSources, games, categories }