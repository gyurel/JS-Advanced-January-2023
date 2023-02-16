window.addEventListener("load", solve);

function solve() {
    let create = {
        li: function(){return document.createElement('li')},
        ul: function(){return document.createElement('ul')},
        div: function(){return document.createElement('div')},
        span: function(){return document.createElement('span')},
        td: function(){return document.createElement('td')},
        tr: function(){return document.createElement('tr')},
        strong: function(){return document.createElement('strong')},
        button: function(){return document.createElement('button')},
        article: function(){return document.createElement('article')},
        h1: function(){return document.createElement('h1')},
        h2: function(){return document.createElement('h2')},
        h3: function(){return document.createElement('h3')},
        h4: function(){return document.createElement('h4')},
        h5: function(){return document.createElement('h5')},
        p: function(){return document.createElement('p')},
    }

    let titleInput = document.getElementById('post-title');
    let categoryInput = document.getElementById('post-category');
    let contentInput = document.getElementById('post-content');

    let publishButton = document.getElementById('publish-btn');
    publishButton.addEventListener('click', publishPost);

    let reviewListElement = document.getElementById('review-list');
    let publishedListElement = document.getElementById('published-list');

    let clearButton = document.getElementById('clear-btn');
    clearButton.addEventListener('click', clearPosts);

    function publishPost(event){
        event.preventDefault();

        let title = titleInput.value;
        let category = categoryInput.value; 
        let content = contentInput.value;

        if(!(title && category && content)){
            return;
        }

        let li = create.li();
        li.classList.add('rpost');

        let article = create.article();

        let h4 = create.h4();
        h4.textContent = title;
        article.appendChild(h4);

        let p1 = create.p();
        p1.textContent = `Category: ${category}`;
        article.appendChild(p1);

        let p2 = create.p();
        p2.textContent = `Content: ${content}`;
        article.appendChild(p2);

        li.appendChild(article);

        let editButton = create.button();
        editButton.classList.add('action-btn', 'edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editPost);
        li.appendChild(editButton);

        let approveButton = create.button();
        approveButton.classList.add('action-btn', 'approve');
        approveButton.textContent = 'Approve';
        approveButton.addEventListener('click', approvePost);
        li.appendChild(approveButton);

        reviewListElement.appendChild(li);

        titleInput.value = '';
        categoryInput.value = '';
        contentInput.value = '';

        function editPost(){
            reviewListElement.removeChild(li);

            titleInput.value = title;
            categoryInput.value = category;
            contentInput.value = content;
        }

        function approvePost(event){
            li.removeChild(editButton);
            li.removeChild(approveButton);
            publishedListElement.appendChild(li);
        }
    }

    function clearPosts(){
        let liElemntsList = Array.from(publishedListElement.querySelectorAll('li'));

        for (const element of liElemntsList) {
            element.remove();
        }
    }
}
