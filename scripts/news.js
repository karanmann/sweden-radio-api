const displayNews = document.getElementById("latest-news")

const fetchNewsData = () => {
  const NEWS_URL = "https://newsapi.org/v2/top-headlines?country=se&apiKey=88804fd27daf4133b20f9cd7037177bf"
  fetch(NEWS_URL)
    .then(res => res.json())
    .then(newsData => {
      displayNewsCards(newsData)
    })
}

fetchNewsData()

const displayNewsCards = (newsData) => {
  let newsOutput = "";

  newsData.articles.slice(0,12).map((news) => {
    
    let d = new Date(news.publishedAt);
    let hours = d.getUTCHours(); // Hours
    let minutes = d.getUTCMinutes();
    
    newsOutput += `
        <a class="news-card" href=${news.url} target="default">
          <img class="news-image" src=${news.urlToImage == undefined ? "../assets/sr01-700x217.jpeg" : news.urlToImage} alt=${news.name}>
          <div class="news-card-content">
            <h4>${news.title}</h4>
            <p>${news.description}</p>
            <div>
              <p><b>Source:</b> ${news.source.name}</p>
              <p><b>Published:</b> ${hours}:${minutes}</p>
            </div>
          </div>
        </a>
    `;
    displayNews.innerHTML = newsOutput;
  });
}