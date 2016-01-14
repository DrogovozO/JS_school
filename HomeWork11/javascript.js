function homeWorkDiv() {
//массив книг
    var books = [{
        name: 'Жизнь взаймы',
        autor: 'Эрих Мария Ремарк',
        pages: 408,
        img: 'http://knijky.ru/sites/default/files/styles/264x390/public/erih_mariya_remark_zhizn_vzajmy.jpg?itok=5mRH7k5y',
        link: 'http://knijky.ru/books/zhizn-vzaymy'
    },
        {
            name: 'Эпоха невинности',
            autor: 'Эдит Уортон',
            pages: 352,
            img: 'http://cover.mreadz.com/294/293809_epoha_nevinnosti.jpg',
            link: 'http://mreadz.com/new/index.php?id=293809'
        },
        {
            name: 'Великий Гэтсби',
            autor: 'Фрэнсис Скотт Фицджеральд',
            pages: 256,
            img: 'http://knijky.ru/sites/default/files/styles/264x390/public/frensis_skott_fitsdzherald_velikij_getsbi.jpg?itok=h3MTIoYW',
            link: 'http://knijky.ru/books/velikiy-getsbi'
        },
        {
            name: 'Леди Сьюзен',
            autor: 'Джейн Остин',
            pages: 224,
            img: 'http://aleksandrovskis.independentfor.com/imagi/ledi-syuzen-ostin-djeyn-3359-small.jpg',
            link: 'http://www.ladylib.net/fb/php/ostin_dzheyn_ledi_syuzen/ostin_dzheyn_ledi_syuzen_GG_1.php'
        }
    ];
//создание тегов
    var divResult = document.createElement('div'),
        ulBooks = document.createElement('ul');

//наполнение тега li
    function createLi (book) {
        var li = document.createElement('li'),
            a = document.createElement('a'),
            spanTitle = document.createElement('span'),
            spanPages = document.createElement('span'),
            spanAutor = document.createElement('span');
        li.setAttribute('class', 'item');
        a.setAttribute('href', book.link);
        a.setAttribute('target', '_blank');
        spanTitle.setAttribute('class', 'title');
        spanPages.setAttribute('class', 'pages');
        spanAutor.setAttribute('class', 'autor');
        li.appendChild( addImage (book) );
        li.appendChild(a);
        a.appendChild(spanTitle);
        li.appendChild(spanPages);
        li.appendChild(spanAutor);
        spanTitle.innerHTML = '<b>' + book.name + '</b>';
        spanPages.innerHTML = '<b>' + 'Страниц: ' + '</b>' + book.pages;
        spanAutor.innerHTML = '<b>' + 'Автор: ' + '</b>' + book.autor;
        return li;
    }
//создание li
    for (var i = 0; i < books.length; i++) {
        ulBooks.appendChild( createLi( books[i] ) );
    }
//создание изображений
    function addImage (img) {
        var image;
        image = document.createElement('img');
        image.setAttribute('src', img.img);
        image.setAttribute('alt', img.name);
        return image;
    }

    divResult.setAttribute('id', 'result');
    document.body.appendChild(divResult);
    divResult.appendChild(ulBooks);
    ulBooks.setAttribute('class', 'books');
}

homeWorkDiv();
