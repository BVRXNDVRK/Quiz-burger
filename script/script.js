  // GLOBAL  
  document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // VARIABLES
  const btnOpenModal = document.querySelector('#btnOpenModal');
  const modal = document.querySelector('#modalBlock');
  const closeModal = document.querySelector('#closeModal');
  const questionTitle = document.querySelector('#question');
  const formAnswers = document.querySelector('#formAnswers');
  const firstBurgerImage = `./image/burger.png`;
  const firstBurgerName = `Стандарт`;
  const secondBurgerImage = `./image/burgerBlack.png`;
  const secondBurgerName = `Черный`;
  const nextButton = document.querySelector('#next');
  const prevButton = document.querySelector('#prev');

  // OBJECTS&MASSIVES
  const questions = [
    {
        question: "Какого цвета бургер?",
        answers: [
            {
                title: 'Стандарт',
                url: './image/burger.png'
            },
            {
                title: 'Черный',
                url: './image/burgerBlack.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Из какого мяса котлета?",
        answers: [
            {
                title: 'Курица',
                url: './image/chickenMeat.png'
            },
            {
                title: 'Говядина',
                url: './image/beefMeat.png'
            },
            {
                title: 'Свинина',
                url: './image/porkMeat.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Дополнительные ингредиенты?",
        answers: [
            {
                title: 'Помидор',
                url: './image/tomato.png'
            },
            {
                title: 'Огурец',
                url: './image/cucumber.png'
            },
            {
                title: 'Салат',
                url: './image/salad.png'
            },
            {
                title: 'Лук',
                url: './image/onion.png'
            }
        ],
        type: 'checkbox'
    },
    {
        question: "Добавить соус?",
        answers: [
            {
                title: 'Чесночный',
                url: './image/sauce1.png'
            },
            {
                title: 'Томатный',
                url: './image/sauce2.png'
            },
            {
                title: 'Горчичный',
                url: './image/sauce3.png'
            }
        ],
        type: 'radio'
    }
  ];

  btnOpenModal.addEventListener('click', () => {
    modal.classList.add('d-block');
    playTest();
  })

  closeModal.addEventListener('click', () => {
    modal.classList.remove('d-block');
  })

  const playTest = function () {

    let numberQuestion = 0;

    const renderAnswers = (index) => {
      questions[index].answers.forEach((answer) => {
        const answerItem = document.createElement('div');
        answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

        answerItem.innerHTML = `
                <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title} class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src="${answer.url}" alt="burger">
                  <span>${answer.title}</span>
                </label>
                `;

                formAnswers.appendChild(answerItem);
      })
    }

    const renderQuestions = (indexQuestion) => {
      formAnswers.innerHTML = '';

      questionTitle.textContent = questions[indexQuestion].question;

      renderAnswers(indexQuestion);
    }
    renderQuestions(numberQuestion);

    // HOMEWORK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    prevButton.classList.add('d-none');
    
    nextButton.onclick = () => {
      numberQuestion++;
      renderQuestions(numberQuestion);

      if (numberQuestion < (questions.length - 1) ) {
      prevButton.classList.remove('d-none');
      }

      if (numberQuestion == (questions.length - 1) ) {
      nextButton.classList.add('d-none');
      }
    }

    prevButton.onclick = () => {
      numberQuestion--;
      renderQuestions(numberQuestion)
      if (numberQuestion < (questions.length - 1) ) {
      nextButton.classList.remove('d-none');
      }
      if (numberQuestion == 0) {
      prevButton.classList.add('d-none');
    }
    }
    
  }
})