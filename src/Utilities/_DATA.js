let meowers = {
  luna: {
    id: "luna",
    name: "Luna",
    kittyPic: "https://imageserver.petsbest.com/marketing/blog/fostering-kittens.jpg",
    meows: {
      "8xf0y6ziyjabvozdd253nd": "firstOption",
      "6ni6ok3ym7mf1p33lnez": "secondOption",
      "am8ehyc8byjqgar0jgpub9": "secondOption",
      "loxhs1bqm25b708cmbf3g": "secondOption"
    },
    meowerPolls: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },

  minipumpkin: {
    id: "minipumpkin",
    name: "Mini Pumpkin",
    kittyPic: "https://media.npr.org/assets/img/2019/08/15/hank_custom-afb34137ba923df61f6c3c21d5598f1ae0ed118a-s1100-c50.jpg",
    meows: {
      "vthrdm985a262al8qx3do": "firstOption",
      "xj352vofupe1dqz9emx13r": "secondOption",
    },
    meowerPolls: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },

  fluffymittens: {
    id: "fluffymittens",
    name: "Fluffy Mittens",
    kittyPic: "https://www.sanantonio.gov/Portals/0/EasyDNNnews/18732/img-BLOG---Found-Kittens-C-19-(4).png",
    meows: {
      "xj352vofupe1dqz9emx13r": "firstOption",
      "vthrdm985a262al8qx3do": "secondOption",
      "6ni6ok3ym7mf1p33lnez": "secondOption"
    },
    meowerPolls: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  }
}

let meowerPolls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    meower: "luna",
    timestamp: 1467166872634,
    firstOption: {
      meows: ["luna"],
      text: `Claw your owner"s face`,
    },
    secondOption: {
      meows: [],
      text: `Bite your owner"s hand`
    }
  },

  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    meower: "fluffymittens",
    timestamp: 1468479767190,
    firstOption: {
      meows: [],
      text: `Sleep all day`,
    },
    secondOption: {
      meows: ["fluffymittens", "luna"],
      text: `Sleep all night`
    }
  },

  "am8ehyc8byjqgar0jgpub9": {
    id: "am8ehyc8byjqgar0jgpub9",
    meower: "luna",
    timestamp: 1488579767190,
    firstOption: {
      meows: [],
      text: `Rule the world`,
    },
    secondOption: {
      meows: ["luna"],
      text: `Also rule the world`
    }
  },

  "loxhs1bqm25b708cmbf3g": {
    id: "loxhs1bqm25b708cmbf3g",
    meower: "minipumpkin",
    timestamp: 1482579767190,
    firstOption: {
      meows: [],
      text: `meow meow meow`,
    },
    secondOption: {
      meows: ["luna"],
      text: `mew mem meow`
    }
  },

  "vthrdm985a262al8qx3do": {
    id: "vthrdm985a262al8qx3do",
    meower: "minipumpkin",
    timestamp: 1489579767190,
    firstOption: {
      meows: ["minipumpkin"],
      text: `Eat tona for dinner`,
    },
    secondOption: {
      meows: ["fluffymittens"],
      text: `Eat chicken for dinner`
    }
  },

  "xj352vofupe1dqz9emx13r": {
    id: "xj352vofupe1dqz9emx13r",
    meower: "fluffymittens",
    timestamp: 1493579767190,
    firstOption: {
      meows: ["fluffymittens"],
      text: "write MeowvaScript",
    },
    secondOption: {
      meows: ["minipumpkin"],
      text: "write Meow++"
    }
  },
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getMeowers() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      return res({ ...meowers })
    }, 1000)
  })
}

export function _getPolls() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      return res({ ...meowerPolls })
    }, 1000)
  })
}

function formatQuestion({ firstOption, secondOption, meower }) {
  return {
    id: generateUID(),
    meower,
    timestamp: Date.now(),
    firstOption: {
      meows: [],
      text: firstOption,
    },
    secondOption: {
      meows: [],
      text: secondOption,
    }
  }
}

export function _savePoll(meowersPoll) {
  return new Promise(function (res, rej) {
    const AuthorizedMeower = meowersPoll.meower
    const formattedQuestion = formatQuestion(meowersPoll)

    setTimeout(function () {
      meowerPolls = {
        ...meowerPolls,
        [formattedQuestion.id]: formattedQuestion
      }

      meowers = {
        ...meowers,
        [AuthorizedMeower]: {
          ...meowers[AuthorizedMeower],
          meowerPolls: meowers[AuthorizedMeower].meowerPolls.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _savePollMeow({ AuthorizedMeower, poll_ID, pollMeow }) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      meowers =
      {
        ...meowers, [AuthorizedMeower]:
        {
          ...meowers[AuthorizedMeower], meows:
          {
            ...meowers[AuthorizedMeower].meows, [poll_ID]: pollMeow
          }
        }
      }

      meowerPolls =
      {
        ...meowerPolls, [poll_ID]:
        {
          ...meowerPolls[poll_ID], [pollMeow]:
          {
            ...meowerPolls[poll_ID][pollMeow],
            meows: meowerPolls[poll_ID][pollMeow].meows.concat([AuthorizedMeower])
          }
        }
      }
      res()
    }, 500)
  })
}