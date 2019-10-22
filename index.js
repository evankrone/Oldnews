document.addEventListener('DOMContentLoaded', function(){
    let newsfeed = document.querySelector('#articles')
    let leftContainer = document.querySelector('#column1')
    let rightContainer = document.querySelector('#column2')
    
    
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'pageSize=5&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        
var req = new Request(url);
fetch(req)
.then(response => response.json())
.then(news => { createNewsCard(news.articles)

})
 
   function createNewsCard(articles){
    let i = 0;
    articles.forEach(article => {
    const newNewsCard = document.createElement('div')
      let imgDiv = document.createElement('div'); 
      imgDiv.innerHTML =  `<div class='retro'>
      <img id="img-url" src= ${article.urlToImage} >
      </div>`
    
     newNewsCard.classList.add('news-card')


        newNewsCard.innerHTML += `
            <h2 id="article-title">${article.title}</h2>
            <h3 id='description'>${article.description}</h3>
            <h4 id="author">${article.author}</h4>
            
            <p id='content'>${article.content} </p>
            
        `
        if(i%2 === 0){
            newNewsCard.prepend(imgDiv)
            leftContainer.append(newNewsCard)
            i++;
        } else{
            rightContainer.append(newNewsCard)
            newNewsCard.className= ('right')
            i++;
        }
    })
};

let date = document.querySelector('#date');
var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));

    date.innerText = curday('/');
 
    
    
    
    


});


// let imageURL = document.querySelector('#img-url');
    // let title = document.querySelector('#article-title');
    // let author = document.querySelector('#author');
    // let desc = document.querySelector('#description')
    // let content = document.querySelector('#content');
    // console.log(title);






// function renderArticles(articles){
//     let i = 0;
//     articles.forEach(article => {

        // if(i%2 === 0){
        //     leftContainer.innerHTML += `
        //     <img id="img-url" style='width: 500px; margin: auto;' src= ${article.urlToImage} >
        //     <h2 id="article-title">${article.title}</h2>
        //     <h4 id="author">${article.author}</h4>
        //     <h5 id='description'>${article.description}</h5>
        //     <p id='content'>${article.content} </p>
        //     <hr>
        //     `
        //     i++;
            
        // } else {
        //     rightContainer.innerHTML += `
        //     <img id="img-url" style='width: 500px; margin: auto;' src= ${article.urlToImage} >
        //     <h2 id="article-title">${article.title}</h2>
        //     <h4 id="author">${article.author}</h4>
        //     <h5 id='description'>${article.description}</h5>
        //     <p id='content'>${article.content} </p>
        //     <hr>
        //     `
            
        //     i++
        // }
        // // newsfeed.innerHTML += `
        // <img id="img-url" style='width: 500px' src= ${article.urlToImage} >
        // <h2 id="article-title">${article.title}</h2>
        // <h4 id="author">${article.author}</h4>
        // <h5 id='description'>${article.description}</h5>
        // <p id='content'>${article.content} </p>
        // <hr>
        // `
        




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
       