document.addEventListener('DOMContentLoaded', function(){
    let newsfeed = document.querySelector('#articles')
    let leftContainer = document.querySelector('#column1')
    let rightContainer = document.querySelector('#column2')
    // let imageURL = document.querySelector('#img-url');
    // let title = document.querySelector('#article-title');
    // let author = document.querySelector('#author');
    // let desc = document.querySelector('#description')
    // let content = document.querySelector('#content');
    // console.log(title);
    
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        
var req = new Request(url);
fetch(req)
.then(response => response.json())
.then(news => { renderArticles(news.articles)

})






function renderArticles(articles){
    let i = 0;
    articles.forEach(article => {

        if(i%2 === 0){
            leftContainer.innerHTML += `
            <img id="img-url" style='width: 500px; margin: auto;' src= ${article.urlToImage} >
            <h2 id="article-title">${article.title}</h2>
            <h4 id="author">${article.author}</h4>
            <h5 id='description'>${article.description}</h5>
            <p id='content'>${article.content} </p>
            <hr>
            `
            i++;
            
        } else {
            rightContainer.innerHTML += `
            <img id="img-url" style='width: 500px; margin: auto;' src= ${article.urlToImage} >
            <h2 id="article-title">${article.title}</h2>
            <h4 id="author">${article.author}</h4>
            <h5 id='description'>${article.description}</h5>
            <p id='content'>${article.content} </p>
            <hr>
            `
            
            i++
        }
        // newsfeed.innerHTML += `
        // <img id="img-url" style='width: 500px' src= ${article.urlToImage} >
        // <h2 id="article-title">${article.title}</h2>
        // <h4 id="author">${article.author}</h4>
        // <h5 id='description'>${article.description}</h5>
        // <p id='content'>${article.content} </p>
        // <hr>
        // `
        
        console.log(i)
    });
   
   
   
//    function createNewsCard(article){
//         const newNewsCard = document.createElement('div')
//         newNewsCard.classList.add('news-card')
//         newNewsCard.innerHTML += `
//             <img id="img-url" style='width: 500px; margin: auto;' src= ${article.urlToImage} >
//             <h2 id="article-title">${article.title}</h2>
//             <h4 id="author">${article.author}</h4>
//             <h5 id='description'>${article.description}</h5>
//             <p id='content'>${article.content} </p>
//             <hr>
//         `
        // return newNewsCard;
//    }
   
        // let articleDiv = document.createElement('div')   
    //     imageURL.src = article.urlToImage;
    //     articleDiv.append(imageURL.src)
        
    //     title.innerText = article.title;
    //     articleDiv.append(title.innerText)
        
    //     author.innerText = article.author;
    //     articleDiv.append(author.innerText)
        
    //     desc.innerText = article.description;
    //     articleDiv.append(desc.innerText)
        
    //     content.innerText = article.content;
    //     articleDiv.append(content.innerText)
    
    
}
});