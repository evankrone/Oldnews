document.addEventListener('DOMContentLoaded', function(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        
var req = new Request(url);
fetch(req)
.then(response => response.json())
.then(news => {
    console.log(news.articles)
})
});