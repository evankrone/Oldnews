document.addEventListener('DOMContentLoaded', function(){
    let newsfeed = document.querySelector('#articles')
    let leftContainer = document.querySelector('#column1')
    let rightContainer = document.querySelector('#column2')
    
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
    })
  
    
  
    
    const navBar = document.querySelector("#categories")
    let categoriesArr = ["Business", "Entertainment", "General", "Health", "Sports", "Tech", "Science"];
    categoriesArr.forEach(category => {
        const navSpan = document.createElement("span")
        navSpan.innerText = category
        navBar.append(navSpan)
    })
    
    navBar.addEventListener("click", function(event){
    console.log(event.target.innerText)
    leftContainer.innerHTML = ""
    rightContainer.innerHTML = ""
    let navSelection = event.target.innerText
    if(navSelection === 'Business'){
    let fetchCategory = 'business' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  })
} else if(navSelection === 'Entertainment'){
    let fetchCategory = 'entertainment' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  })
} else if(navSelection === 'General'){
    let fetchCategory = 'general' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  })
} else if(navSelection === 'Health'){
    let fetchCategory = 'health' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  })
} else if(navSelection === 'Sports'){
    let fetchCategory = 'sports' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  })
} else if(navSelection === 'Tech'){
    let fetchCategory = 'technology' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  }) 
} else if(navSelection === 'Science'){
    let fetchCategory = 'science' 
    let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `category=${fetchCategory}&` +
    'pageSize=3&' +
    'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
        fetch(url)
        .then(response => response.json())
        .then(news => { createNewsCard(news.articles)
  })
} else {
        let url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'pageSize=3&' +
        'apiKey=cca8e82c481f4e7496c04e7e57c37f73';
            fetch(url)
            .then(response => response.json())
            .then(news => { createNewsCard(news.articles)
      })
}
})

    function clearFetch(){
        if(navBar.children){
            navBar.children.remove();
        }
    }

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
        if(i%3 === 0){
            newNewsCard.prepend(imgDiv)
            leftContainer.append(newNewsCard)
            i++;
        } else if (i%3===1){ 
            rightContainer.append(newNewsCard)
            newNewsCard.className= ('right')
            i++;
    } else{
            rightContainer.append(newNewsCard)
            newNewsCard.className= ('right')
            i++;
        }
    })
};

let date = document.querySelector('#date');
let dateTag = document.createElement('p');
dateTag.classList.add('dateTag')
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

    dateTag.innerText = curday('/');
    date.append(dateTag)
    

    


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
       