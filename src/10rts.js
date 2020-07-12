(function(){
    var baseUrl = "https://twitter.com/search?";
    var userName = window.location.pathname.match(/\/([0-9a-zA-Z_]+)/)[1];
    var searchQuery = [
        "from:" +  userName,
        "filter:images",
        "min_retweets:10"];
    var queryArray = [
        "q=" + encodeURIComponent(searchQuery.join(" ")),
        "f=live"]; // latest tweets
    var searchUrl = baseUrl + queryArray.join("&");
    window.open(searchUrl);
})();