// Go to http://shoutcast.com/
// Select Category/Genre. Ex. http://www.shoutcast.com/radio/Metal
// Press 'load more' until all channels are loaded
// Run this code in JavaScript console
// Copy output and add to bookmarks.xml

$(".dirlist > div > a").each(function(i, v) {
    console.log('<bookmark name="' + $(v).attr("title") + '" url="' + $(v).attr("href") + '"/>');
    return;
})
