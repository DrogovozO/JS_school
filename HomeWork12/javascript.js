(function IIFE() {
    'use strict';
//массив загадок
    var riddles = [{
            question: 'Кто ходит сидя?',
            answer: ['ш', 'а', 'х', 'м', 'а', 'т', 'и', 'с', 'т']
        },
        {
            question: 'Какая нота и продукт называются одиноково?',
            answer: ['с', 'о', 'л', 'ь']
        },
        {
            question: 'Завязать можно, а развязать нельзя.',
            answer: ['р', 'а', 'з', 'г', 'о', 'в', 'о', 'р']
        },
        {
            question: 'Как мяч круглый, как тельняшка полосатый.',
            answer: ['а', 'р', 'б', 'у', 'з']
        }
    ];

//создание тегов
    var divQuestion = document.createElement('div'),
        divAnswer = document.createElement('div'),
        buttonRiddle = document.querySelector('#randomRiddle'),
        inputOn = document.querySelector('#onForm'),
        divLetter = document.querySelector('.tried_letters'),
        reward = 0,
        iteration = 1;
    const min = 10,                                            //для расчета случайного целого
        max = 50;
//генерация случайного числа
    function getRandom(number) {
        return Math.floor(number * Math.random())
    }

//выбор случайной загадки
    function randomRiddle() {
        return riddles[getRandom(riddles.length)];
    }

//обработчик события для кнопки
    function onClickHandler() {
        var riddle = randomRiddle();
        divAnswer.innerHTML = '';
        divQuestion.setAttribute('class', 'question');
        divQuestion.innerHTML = riddle.question;
        document.body.appendChild(divQuestion);
        document.body.appendChild(divAnswer);
        divLetter.innerHTML = '<span><b>Использованные буквы: </b></span>';
        for (var i = 0; i < riddle.answer.length; i++) {
            createDiv(divAnswer);
        }
    }
    buttonRiddle.addEventListener('click', onClickHandler);

//создание пустых ячеек
    function createDiv(div) {
        var spanLetter = document.createElement('span');
        spanLetter.innerHTML = ' ';
        spanLetter.setAttribute('class', 'letter');
        div.appendChild(spanLetter);
    }

//обработка ввода буквы
    function onKeyUpHandler(event) {
        if (event.keyCode === 13) {
            guessLetter(this.value);
            var spanAddLetter = document.createElement('span');
            spanAddLetter.innerHTML = this.value + ', ';
            divLetter.appendChild(spanAddLetter);
            this.value = '';
        }
    }

    inputOn.addEventListener('keyup', onKeyUpHandler);
//функция нахождения массива букв
    function getAnswer() {
        for (var i = 0; i < riddles.length; i++) {
            if (divQuestion.textContent === riddles[i].question) {
                return riddles[i];
            }
        }
    }

//проверка буквы в массиве
    function guessLetter(letter) {
        var answer = getAnswer().answer,
            letterTrue = false,
            search = document.querySelectorAll('.letter'),
            quantity = 0;
        for (var i = 0; i < answer.length; i++) {
            if (letter == answer[i]) {
                search[i].innerHTML = letter;
                search[i].style.borderBottom = 'none';
                letterTrue = true;
            } else {

            }
        }
        if (letterTrue) {
            alert('Буква \' ' + letter + ' \' угадана правильно!');
            reward += (Math.floor(Math.random() * (max - min + 1)) + min) * iteration;
            if (iteration != 2) {                               //проверка для повтора букв
                iteration += 1;
            }
        } else {
            alert('Буква \' ' + letter + ' \' угадана не правильно!');
            iteration = 1;
        }
        for (var j = 0; j < search.length; j++) {
            if (search[j].innerHTML === ' ') {
                quantity += 1;
            }
        }
        if (quantity == '0') {
            alert('Вы разгадали слово! Ваше вознаграждение = ' + reward);
        } else {
            alert('Осталось отгадать ' + quantity + ' букв');
        }
        return true;
    }

})();
