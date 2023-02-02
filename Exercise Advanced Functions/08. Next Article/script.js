function getArticleGenerator(articles) {
    let articlesArr = articles;
    let articlesDiv = document.getElementById('content');

    return () => {
        let currentArticle = articlesArr.shift();
        debugger
        if(currentArticle){
            let newArticleElement = document.createElement('article');
        newArticleElement.textContent = currentArticle;
        articlesDiv.appendChild(newArticleElement);
        }
    }
}
