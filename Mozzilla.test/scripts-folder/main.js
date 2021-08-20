

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/santyago/Desktop/Programming/web-projects/test-site/images-folder/firefox-24921__340.png') {
      myImage.setAttribute('src','/Users/santyago/Desktop/Programming/web-projects/test-site/images-folder/690-6900252_doge-meme-png-thug-l.png');
    } else {
      myImage.setAttribute('src','/Users/santyago/Desktop/Programming/web-projects/test-site/images-folder/firefox-24921__340.png');
    }
}