const cowsay = require("cowsay")
const quote = require("inspirational-quotes")
/*
console.log(cowsay.say(
    {
        text : "hfiegrfhle",
        e : "oo",
        t : "u"
    }
))
*/
const tx = quote.getQuote().text

console.log(cowsay.say(
    {
        text : tx,
        e : "oo",
        T : "U"
    }
))