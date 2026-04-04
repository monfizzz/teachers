const quizData = [
    {
        question: "Любит ли Ваш ребенок общаться со сверстниками?",
        a: "Да",
        b: "Нет",
        correct_dav: "a",
        correct_gum: "a",
        correct_art: "a",
    },
    {
        question: "Умеет ли Ваш ребенок работать в команде?",
        a: "Да",
        b: "Нет",
        correct_dav: "a",
        correct_gum: "a",
    },
    {
        question: "Любит ли Ваш ребенок физические игры?",
        a: "Да",
        b: "Нет",
        correct_gum: "a",
    },
    {
        question: "Любит ли Ваш ребенок рисовать?",
        a: "Да",
        b: "Нет",
        correct_art: "a",
    },
    {
        question: "Любит ли Ваш ребенок проводить время на природе?",
        a: "Да",
        b: "Нет",
        correct_art: "a",
    },
    {
        question: "Любит ли Ваш ребенок музыку?",
        a: "Да",
        b: "Нет",
        correct_art: "a",
    },
    {
        question: "Умеет ли Ваш ребенок играть на музыкальном инструменте?",
        a: "Да",
        b: "Нет",
        correct_art: "a",
    },
    {
        question: "Есть ли у Вашего ребенка способности к точным наукам?",
        a: "Да",
        b: "Нет",
        correct_dav: "a",
        correct_art: "b"
    },
    {
        question: "Расстраивается ли Ваш ребенок из-за ошибок во время решения задач?",
        a: "Да",
        b: "Нет",
        correct_dav: "b",
    },
    {
        question: "Умеет ли Ваш ребенок выдвигать собственные гипотезы?",
        a: "Да",
        b: "Нет",
        correct_dav: "a",
    },
    {
        question: "Любит ли Ваш ребенок экспериментировать и изобретать что-то необычное? ",
        a: "Да",
        b: "Нет",
        correct_dav: "a",
        correct_gum: "a"
    },
    {
        question: "Быстро ли Ваш ребенок усваивает новую информацию?",
        a: "Да",
        b: "Нет",
        correct_gum: "a",
    },
    {
        question: "Любит ли Ваш ребенок читать?",
        a: "Да",
        b: "Нет",
        correct_gum: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let scoreart = 0;
let scoredav = 0;
let scoregum = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct_dav){
            scoredav++;
        }

        if(answer === quizData[currentQuiz].correct_art){
            scoreart++;
        }

        if(answer === quizData[currentQuiz].correct_gum){
            scoregum++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            if(scoreart > scoredav && scoreart > scoregum){
                quiz.innerHTML = `<h2 style="padding: 5% 5% 0 5%">Вальдорфская школа</h2>
                <p style="font-size: 22px; padding: 0 5% 5% 5%">По результатам теста вам лучше всего подходит Вальдорфская система, которая делает ставку на творческое и практическое развитие в гармонии с природными ритмами ребёнка. В отличие от традиционного подхода, здесь нет раннего академического давления — обучение строится через игру, искусство, сохраняя естественную любознательность. Выбирая эту систему, вы даёте ребёнку возможность расти без стресса, раскрывая свои способности в комфортном темпе.</p>
                <button class="button" onclick="location.reload()">Пройти ещё раз</button>
            `;
            }
            if(scoredav > scoreart && scoredav > scoregum){
                quiz.innerHTML = `<h2 style="padding: 5% 5% 0 5%">Эльконин-Давыдов</h2>
                <p style="font-size: 22px; padding: 0 5% 5% 5%">По результатам теста вам лучше всего подходит система развивающего обучения Эльконина-Давыдова, которая формирует у ребёнка теоретическое мышление и умение самостоятельно находить решение через анализ и поиск общих принципов. В отличие от традиционной школы, здесь дети не заучивают правила, а открывают их сами в процессе учебного диалога и решения нестандартных задач. Выбирая эту систему, вы развиваете в ребёнке настоящую самостоятельность, осознанность и способность учиться всю жизнь, а не просто запоминать факты.</p>
                <button class="button" onclick="location.reload()">Пройти ещё раз</button>
            `;
            }
            if(scoregum > scoreart && scoregum > scoredav){
                quiz.innerHTML = `<h2 style="padding: 5% 5% 0 5%">Школа 2100</h2>
                <p style="font-size: 22px; padding: 0 5% 5% 5%">По результатам теста вам лучше всего подходит система «Школа 2100», которая ориентирована на формирование функциональной грамотности и умение применять знания в реальной жизни через проблемно-диалогический метод. В отличие от традиционного подхода, здесь ребёнок учится действовать в ситуации выбора, самостоятельно добывать информацию и работать в команде, а не просто заучивать параграфы. Выбирая эту систему, вы помогаете ребёнку стать успешным в постоянно меняющемся мире, развивая его самостоятельность, коммуникабельность и способность учиться без страха ошибки.</p>
                <button class="button" onclick="location.reload()">Пройти ещё раз</button>
            `;
            }
            else{
                quiz.innerHTML = `<h2 style="padding: 5% 5% 0 5%">Школа России</h2>
                <p style="font-size: 22px; padding: 0 5% 5% 5%">По результатам теста вам лучше всего подходит система «Школа России», которая представляет собой классический, проверенный временем подход с акцентом на прочное усвоение знаний, традиционные ценности и знакомую многим родителям методику. В отличие от экспериментальных программ, здесь обеспечивается плавный переход от дошкольного обучения к школьному, чёткая структура уроков и обилие отработанных практических материалов, что снижает стресс у ребёнка. Выбирая эту систему, вы получаете предсказуемый и надёжный фундамент образования, который гарантирует освоение обязательной программы и лёгкую адаптацию к любым стандартным экзаменам и продолжению учёбы.</p>
                <button class="button" onclick="location.reload()">Пройти ещё раз</button>

            `;
            }

        }
    }
});
