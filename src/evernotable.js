(function(){
    function restoreOriginalImage(){
        var part = document.getElementById("react-root");
        part.innerHTML = part.innerHTML.replace(/name=[a-zA-Z0-9]+/gi, "name=orig");
        part.innerHTML = part.innerHTML.replace(/<a href="\/[a-zA-Z0-9_]+\/status\/[0-9]+\/photo\/[1-4]"[^>]+>/gi, "");
    }

    function removeHashtag(){
        var part = document.getElementById("react-root");
        part.innerHTML = part.innerHTML.replace(/<a href="\/hashtag\/[^"]+"[^>]+>/gi, "");
    }

    function integrateElements(){
        var parts = document.getElementsByClassName('css-901oao r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0');
        if (parts.length == 0) {
            return;
        }
        var parts2 = document.getElementsByClassName('css-1dbjc4n r-9x6qib r-1ylenci r-1phboty r-rs99b7 r-156q2ks r-1udh08x');
        parts2[0].insertBefore(parts[0], parts2[0].childNodes[0]);
    }

    function removeElements(str){
        var parts = document.getElementsByClassName(str);
        Array.from(parts).forEach(e => e.parentNode.removeChild(e));
    }

    function compressTitle(){
        document.title = document.title.replace(/ 「[\s\S^」]*」/gi, "");
    }

    restoreOriginalImage();
    removeHashtag();
    removeElements('css-1dbjc4n r-aqfbo4 r-1joea0r r-zso239 r-1hycxz'); // sidebar
    removeElements('css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-o7ynqc r-6416eg'); // reply
    removeElements('css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1mi0q7o');  // private reply
    removeElements('css-18t94o4 css-1dbjc4n r-1ny4l3l r-1j3t67a r-o7ynqc r-6416eg'); // omitted reply
    removeElements('css-1dbjc4n r-18u37iz r-d0pm55'); // user link
    removeElements('css-1dbjc4n r-xoduu5 r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-h9hxbl r-417010'); // emoji
    compressTitle(); // omit part of title between "「」"
    integrateElements(); // tweet text into element of image
})();
