// Main js file 
var quotesObj = [
  {
  quote: "\"C is quirky, flawed & an enormous   success\"",
  author: "- Dennis Ritchie"
  },
  {
    quote: "\"If debugging is the process of removing software bugs, then programming must be the process of putting them in.\"",
  author: "- Edsger Dijkstra"
  },
  {
    quote: "\"It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.\"",
    author: "- Steve McConnel"
  },
  {
    quote: "\"First, solve the problem. Then, write the code.\"",
    author: "- John Johnson"
  },
  {
    quote: "\"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.\"",
    author: "- Rick Osborne"
  }
];

var cquote = "";
var cauthor = "";
function setText() {
  var quoteNum = Math.floor(Math.random() * 5);       
  
  cquote = quotesObj[quoteNum].quote;
  cauthor = quotesObj[quoteNum].author;
  $(".blockquote").text(quotesObj[quoteNum].quote);    
  $(".cite").text(quotesObj[quoteNum].author);      
}

$(function() {  
  setText();
  
  $(".new-quote").click(function() {            
    setText();
  });
  
  $(".new-tweet").click(function() {
    $(this).attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + cquote + '" ' + cauthor));
  });
});
