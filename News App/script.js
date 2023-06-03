const API_key="19d3984a410744f885c5097132864d05";
const url="https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload(){
    window.location.reload();
}

async function fetchNews(query){
    const res= await fetch(`${url}${query}&apikey=${API_key}`);
    const data=await res.json();
    bindData(data.articles);
}
function bindData(articles){
    const cardsContainer= document.getElementById('cards-container');
    const newsCardTemplate= document.getElementById("template-news-card");

    cardsContainer.innerHTML ="";

    articles.forEach((article)=>{
        if(!article.urlToImage) return;
        const cardClone= newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article)
        cardsContainer.appendChild(cardClone);
    })
}

function fillDataInCard(cardClone,article) {
    const newsImg=cardClone.querySelector('#news-img');
    const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
    const newsDesc=cardClone.querySelector('#news-desc');

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;

    const date= new Date(article.publishedAt).toLocaleString("en-us",{
        timeZone:"Asia/Jakarta"
    });
    newsSource.innerHTML=`${article.source.name}, ${date}`;
    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank")
    })
}
function onNavItemClick(id){
    fetchNews(id);
}
const searchButton= document.getElementById('search-button');
const searchText= document.getElementById("news-input");
searchButton.addEventListener('click',()=>{
    const query=searchText.value;
    if(!query) return;
    fetchNews(query);
});