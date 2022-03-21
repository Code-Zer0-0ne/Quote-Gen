
var quotes = [
    { quote: "Do you always want to live hiding behind the mask you put up for the sake of others? You’re you, and there’s nothing wrong with that.", source: "Ymir", citation: "Attack on Titan"},
    { quote: "Don’t live your life making up excuses. The one making your choices is yourself!", source: 'Mugen', citation: "Mugen the samurai"},
    { quote: "You’ve got two legs and a heartbeat. What’s stopping you?", source: "Inuyasha", citiation: "Inuyasha"},
    { quote: "Being alone is better than being with the wrong person.", source: "L Lawleit"},
    { quote: 'I must study lots of things or I won’t become a great person.', source: 'Kotomi Ichinose', citation: 'Kotomi Ichinose(Clannad)'},
    { quote: "The past is the past. We cannot indulge ourselves in memories and destroy the present.", source: "Murata Ken", citation: "Murata Ken (King From Now On!)"},
    { quote: "You can’t sit around envying other people’s worlds. You have to go out and change your own.”", source: "Shinichi Chiaki", citation: "Shinichi Chiaki (Nodame Cantabile)"},
    { quote: "Remember the lesson, not the disappointment.", source: "Holo The Wise Wolf", citation: "Holo (Spice And Wolf)"},
    { quote: "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully.", source: "Koro-sense", citation: "Assassination classroom"},
    { quote: "Stop pitying yourself. Pity yourself, and life becomes an endless nightmare.", source: "Osamu Dazai", citation: "Bungo Stray Dogs"},
    { quote: "A dropout will beat a genius through hard work", source: "Rock Lee", citation: "Naruto"},
    { quote: "How can you move forward if you keep regretting the past?", source: "Edward", citation: "Full Metal Alchemist: Brotherhood"},
    { quote: "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger, as well as kinder.", source: "Gildarts Clive", citation: "Fairy Tail"},
    { quote: "If you feel yourself hitting up against your limit, remember for what cause you clench your fists! Remember why you started down this path, and let that memory carry you beyond your limit", source: "All Might", citation: "My Hero Academia"},
    { quote: "Human strength lies in the ability to change yourself.", source: "Saitama", citation: "One Punch Man"},
    { quote: "In this world, there’s no such thing as 'failure' in the first place. The one who knows the 'ways to win' more than anyone is also the one who’s experienced the most 'mistakes'. In other words… You could say 'failure' is equal to 'success'… Couldn’t you?", source: "Toriko", citation: "Toriko"},
    { quote: "The world is cruel, but also very beautiful.", source: "Mikasa Ackerman", citation: "Attack on Titan"},
    { quote: "Life is like a tube of toothpaste. When you’ve used all the toothpaste down to the last squeeze, that’s when you’ve really lived. Live with all your might, and struggle as long as you have life.", source: "Mion Zonosaki", citation: "Higurasi No Naku Koro Ni"},
    { quote: "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.", source: "Roy Mustang", citation: "Full Metal Alchemist"},
    { quote: "Nobody can foretell the outcome, Each decision you make holds meaning only by affecting your next decision", source: "Erwin Smith", citation: "Attack on Titan"}
  ]
  console.log(quotes);
  
  function getRandomQuote() {
    
    var random = Math.floor(Math.random() * quotes.length);
    
   
    return(quotes[random]);
  }
  
  
  function printQuote(){
    //Pull the quote in question from getRandomQuote
    var currentQuote = getRandomQuote();
    // Set a blank string to hold the HTML
    var html = ''
    //Set up a variable to point to our quote box in the HTML
    var quoteDiv = document.getElementById('quote-box')
  
    //Open up a p tag and place the quote itself in it
    html += '<p class="quote">' + currentQuote.quote 
    
    //If tags are present...
    if ('tags' in currentQuote){
      // ...Add the tags to the quote
        html += '  ' + currentQuote.tags.join(', ')
    }
    // Close the first p tag
    html += '</p>'
  
    // mandatory p tag for source
    html += '<p class="source ">' + currentQuote.source 
    // if a citation is defined...
    if ('citation' in currentQuote) {
      // ...add it to the p tag
      html += '<span class=" citation">' + currentQuote.citation + '</span>'
    }
    // If a year is defined...
    if ('year' in currentQuote){
      // ...add it to the p tag
      html += '<span class="year">' + currentQuote.year + '</span>'
    }
    html += '</p>'
  
    // take this HTML item we have been appending and set the html of the quote box to it
    quoteDiv.innerHTML = html
  
  }
  
 

  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);
  
  window.setInterval(printQuote, 30000);