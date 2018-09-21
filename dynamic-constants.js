/*
* DYNAMIC CONSTANTS
*
* Defines responses that require dynamic content (ex. a new member's username)
*
*/
const Constants = require('./constants.js');
const Utils = require('./utils.js');

module.exports = {
  welcomeMsg: function(member) {
    var rules = Utils.channel(Constants.channels['rules']);
    var emoji = Utils.emoji(Constants.emojis['happy']);

    return `Welcome to the server, ${member}! ` +
          `Be sure to check out ${rules}.id for basic ` +
          "info on the server :rakesama: I guess we like talking to new people, " +
          "so don't be shy and just jump in on any of the conversations!\n\n" +
          `I've given you the ${Constants.defaultRole} flair for now ` +
          `- if you would like that changed, perhaps you should ask our deputy teachers. ${emoji}`
    },
    firstTierWarning: function(id) {
      var lounge = Utils.channel(Constants.channels['lounge']);

      return `Hey, <@${id}>! Welcoming new members and casual chat is alright and somewhat encouraged, ` +
            `but we should be having conversations about the best sensei in ${lounge}. ` +
            'so move your lazy bum!'
    },
    secondTierWarning: function(id) {
      return `Hey you! <@${id}>! This channel is the best place to chat about Wakasa-sensei, you ` +
             "should chat here. Don't make me repeat myself!"
    },
    thirdTierWarning: function(id) {
      var emoji = Utils.emoji(Constants.emojis['sad']);
      return `You know what, <@${id}>? I don't care. I just don't care anymore. ` +
             "You don't care about sensei like I do. Fine then, do what you want. " +
             `Chat here then ${emoji}`
    }
}
