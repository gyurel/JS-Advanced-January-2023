function solve() {
    let recipientInput = document.getElementById('recipientName');
    let titlelInput = document.getElementById('title');
    let textArea = document.getElementById('message');

    let ulList = document.getElementById('list');
    let sentMailUl = document.querySelector(".sent-list");
    let deletedeUl = document.querySelector(".delete-list");

    let addToListButton = document.getElementById('add');
    addToListButton.addEventListener('click', addMail);
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetFields);

    function addMail(event){
        event.preventDefault();

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

        let recipient = recipientInput.value;
        let title = titlelInput.value;
        let text = textArea.value;

        if(!(recipient && title && text)){
            return;
        }

        let li = create.li();

        let h41 = create.h4();
        h41.textContent = `Title: ${title}`;
        li.appendChild(h41);

        let h42 = create.h4();
        h42.textContent = `Recipient Name: ${recipient}`;
        li.appendChild(h42);

        let span = create.span();
        span.textContent = text;
        li.appendChild(span);

        let div = create.div();
        div.id = "list-action";
        li.appendChild(div);

        let sendButton = create.button();
        sendButton.type = "submit";
        sendButton.id = "send";
        sendButton.textContent = "Send";
        sendButton.addEventListener('click', sendMail);
        div.appendChild(sendButton);

        let deleteButton = create.button();
        deleteButton.type = "submit";
        deleteButton.id = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', deleteListedMail);
        div.appendChild(deleteButton);

        ulList.appendChild(li);

        recipientInput.value = '';
        titlelInput.value = '';
        textArea.value = '';

        function sendMail(){
            ulList.removeChild(li);

            let sentLI = create.li();

            let span1 = create.span();
            span1.textContent = `To: ${recipient}`;
            sentLI.appendChild(span1);

            let span2 = create.span();
            span2.textContent = `Title: ${title}`;
            sentLI.appendChild(span2);

            let sentDiv = create.div();
            sentDiv.classList.add('btn');
            sentLI.appendChild(sentDiv);

            let deleteSentMailButton = create.button();
            deleteSentMailButton.type = "submit";
            deleteSentMailButton.classList.add('delete');
            deleteSentMailButton.textContent = "Delete";
            deleteSentMailButton.addEventListener('click', deleteSentMail);
            sentDiv.appendChild(deleteSentMailButton);

            sentMailUl.appendChild(sentLI);

            function deleteSentMail(){
                sentMailUl.removeChild(sentLI);

                let deltedListed = create.li();

                let span1Listed = create.span();
                span1Listed.textContent = `To: ${recipient}`;
                deltedListed.appendChild(span1Listed);

                let span2Listed = create.span();
                span2Listed.textContent = `Title: ${title}`;
                deltedListed.appendChild(span2Listed);

                deletedeUl.appendChild(deltedListed);
            }
        }

        function deleteListedMail(){
            ulList.removeChild(li);

            let deltedListed = create.li();

            let span1Listed = create.span();
            span1Listed.textContent = `To: ${recipient}`;
            deltedListed.appendChild(span1Listed);

            let span2Listed = create.span();
            span2Listed.textContent = `Title: ${title}`;
            deltedListed.appendChild(span2Listed);

            deletedeUl.appendChild(deltedListed);
        }
    }

    function resetFields(event){
        event.preventDefault();
        
        recipientInput.value = '';
        titlelInput.value = '';
        textArea.value = '';
    }
}
solve()