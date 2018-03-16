//region {variables and functions}
var quoteId = "quote";
var newQuoteButtonId  ="newQuoteButton";
var backgroundColorId ="backgroundColor";
var rgbString = "rgb";
var quoteAuthor;
var backgroundColorIndex = 0;
var quoteIndex = 0;

var backgroundColorList =["(155,89,182)","(119,177,169)","(115,168,87)","(71,46,50)",
                            "(205,220,57)","(255,64,129)"];
var quotesObject = [ //{"authorName":"Leslie Brown", "shortName":"Les Brown",
					// "quote":
					 "Its not over until I win."
                     //},
                    // {"authorName":"Winston Churchill", "shortName":"Do not know"
                    ,
					// "quote":
					 "If you'are going through hell, keep going."
                   //  },
                   //  {"authorName":"People", "shortName":"Pips"
                   ,
					// "quote":
					 "If its not broken dont fix it."
                   //  }
                   , 
                    "Difficulties mastered are opportunities won."
                   ];

function getContent(contentId)
{
	var content = document.getElementById(contentId);
    return content;
}

function getNewQuote(currentQuoteIndex)
{
	quoteIndex = (currentQuoteIndex == (quotesObject.length - 1)) ? 0 : currentQuoteIndex + 1 ; 
    return  quotesObject[quoteIndex];
}

function getNewBackgroundColor(currentBackgroundColorIndex)
{
    backgroundColorIndex = (currentBackgroundColorIndex == (backgroundColorList.length - 1)) ? 0 : currentBackgroundColorIndex + 1;
    return backgroundColorList[backgroundColorIndex];
}

function setNewColorSqueme(backgroundColorId,currentBackgroundColorIndex)
{
   var pageContent = getContent(backgroundColorId);
   var buttonIdContent = getContent(newQuoteButtonId);
  //setBackgroundColorQuery += getNewBackgroundColor(currentBackgroundColorIndex) + '}');
  pageContent.style.background = rgbString + getNewBackgroundColor(currentBackgroundColorIndex) ;
  pageContent.style.color = rgbString + getNewBackgroundColor(currentBackgroundColorIndex) ;
  buttonIdContent.style.background = rgbString + getNewBackgroundColor(currentBackgroundColorIndex) ;
}

function setQuoteContent(quoteId,currentQuoteIndex)
{
   var quoteContent = getContent(quoteId);
   quoteContent.innerHTML = getNewQuote(currentQuoteIndex);
}

function changePageContent(backgroundColorId,currentBackgroundColorIndex,quoteId,currentQuoteIndex)
{
	setNewColorSqueme(backgroundColorId,currentBackgroundColorIndex);
	setQuoteContent(quoteId,currentQuoteIndex);
}
// end-region


//region {calls}
//console.log(document.getElementsByTagName("body").innerHTML);

//document.addEventListener('click', changePageContent(backgroundColorId,backgroundColorIndex,quoteId,quoteIndex));
  


//region