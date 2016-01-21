(function IIFE() {
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
        },
        {
            name: 'Старик и море',
            autor: 'Эрнест Хемингуэй',
            pages: 110,
            img: 'http://hemingway-lib.ru/images/starik-i-more-2.jpg',
            link: 'http://hemingway-lib.ru/starik-i-more/starik-i-more.html'
        },        {
            name: 'Мастер и Маргарита',
            autor: 'Михаил Булгаков',
            pages: 296,
            img: 'http://nashbulgakov.ru/images/mim.jpg',
            link: 'http://masterimargo.ru/book.html'
        }
    ];
//создание тегов
    var divResult = $('<div></div>').attr('id', 'result'),
        ulBooks = $('<ul></ul>').addClass('books');
//наполнение тега li
    function createLi(book) {
        var li = $('<li></li>').addClass('item'),
            a = $('<a></a>').attr({'href': book.link, 'target': '_blank'}),
            spanTitle = $('<span></span>').addClass('title'),
            spanPages = $('<span></span>').addClass('pages'),
            spanAutor = $('<span></span>').addClass('autor');
        li.append(addImage(book));
        li.append(a);
        a.append(spanTitle.html('<b>' + book.name + '</b>'));
        li.append(spanPages.html('<b>' + 'Страниц: ' + '</b>' + book.pages));
        li.append(spanAutor.html('<b>' + 'Автор: ' + '</b>' + book.autor));
        return li;
    }

//создание li
    for (var i = 0; i < books.length; i++) {
        ulBooks.append(createLi(books[i]));
    }
//создание изображений
    function addImage(img) {
        return $('<img>').attr({'src': img.img, 'alt': img.name});
    }

    $('body').append(divResult);
    divResult.append(ulBooks);
})();

