(function(){
    function removeFrontLayer(){
        var layers = document.getElementById("layers");
        layers.parentNode.removeChild(layers);
    }

    function removeHeader(){
        var main = document.getElementsByTagName("main")[0];
        for (let i = main.parentNode.childElementCount - 1; i >= 0; i--) {
            if (main.parentNode.children[i] != main) {
                main.parentNode.removeChild(main.parentNode.children[i]);
            }
        }
    }

    function removeSidebar(){
        var sidebar = document.querySelector('[data-testid="sidebarColumn"]');
        if (sidebar != null) {
            sidebar.parentNode.removeChild(sidebar);
        }
    }

    function restoreOriginalImage(){
        var part = document.getElementById("react-root");
        part.innerHTML = part.innerHTML.replace(/name=[a-zA-Z0-9]+/gi, "name=orig");
        part.innerHTML = part.innerHTML.replace(/<a href="\/[a-zA-Z0-9_]+\/status\/[0-9]+\/photo\/[1-4]"[^>]+>/gi, "");
        var images = document.querySelectorAll('[data-testid="tweetPhoto"]');
        if (images.length == 4) {
            images[0].parentElement.parentElement.insertBefore(images[2].parentElement, null);
            images[3].parentElement.parentElement.insertBefore(images[1].parentElement, images[3].parentElement);
        }
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
        var parts2 = document.getElementsByClassName('css-1dbjc4n r-1bs4hfb r-1867qdf r-1phboty r-rs99b7 r-156q2ks r-1ny4l3l r-1udh08x r-o7ynqc r-6416eg');
        parts2[0].insertBefore(parts[0], parts2[0].childNodes[0]);
    }

    function removeElements(str){
        var parts = document.getElementsByClassName(str);
        Array.from(parts).forEach(e => e.parentNode.removeChild(e));
    }

    function compressTitle(){
        document.title = document.title.replace(/ 「[\s\S^」]*」/gi, "");
    }

    removeFrontLayer();
    removeHeader();
    removeSidebar();
    removeElements('css-1dbjc4n r-aqfbo4 r-14lw9ot r-j7yic r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q'); // tweet header
    removeElements('css-1dbjc4n r-9x6qib r-1867qdf r-rs99b7 r-1loqt21 r-dap0kf r-1ny4l3l r-1udh08x r-o7ynqc r-6416eg'); // include tweet
    removeElements('css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-o7ynqc r-6416eg'); // reply
    removeElements('css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-1mi0q7o');  // private reply
    removeElements('css-18t94o4 css-1dbjc4n r-1ny4l3l r-1j3t67a r-o7ynqc r-6416eg'); // omitted reply
    removeElements('css-1dbjc4n r-1awozwy r-zv2cs0 r-1867qdf r-18u37iz r-ku1wi2 r-156q2ks r-1yt7n81 r-9qu9m4'); // reply restricted tweet
    removeElements('css-18t94o4 css-1dbjc4n r-16y2uox r-1n0xq6e r-1ny4l3l r-qhyqy2 r-atwnbb r-o7ynqc r-6416eg'); // show reply
    removeElements('css-1dbjc4n r-18u37iz r-d0pm55'); // user link
    removeElements('css-1dbjc4n r-xoduu5 r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-h9hxbl r-417010'); // emoji
    restoreOriginalImage();
    removeHashtag();
    compressTitle(); // omit part of title between "「」"
    integrateElements(); // tweet text into element of image
})();
