const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'I feel like I have little or no control over my work life ',
        choice1: "agree",
        choice2: "disagree",
        
        answer: 2,
    },
    {
        question:
            " I dont enjoy hobbies or interests regularly outside of work",
        choice1: "agree",
        choice2: "disagree",
      
        answer: 2,
    },
    {
        question: "I often feel guilty because I can’t make time for everything I want to",
        choice1: "agree",
        choice2: "disagree",
        
        answer: 2,
    },
    {
        question: " I frequently feel anxious or upset because of what is happening at work",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: " I usually dont have enough time to spend with my loved ones",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: " When I’m at home, I dont feel relaxed and comfortable",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: "I dont much have time to do something just for me every week",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    },
    {
        question: "On most days, I feel overwhelmed and over-committed",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    },
    {
        question: "I often lose my temper at work",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    },
    {
        question: " I never use all my allotted vacation days",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: "  I often feel exhausted – even early in the week",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: " Usually, I work through my lunch break",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: "  I rarely miss out on important family events because of work",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: "I frequently think about work when I’m not working",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
    ,
    {
        question: " My family is frequently upset with me about how much time I spend working",
        choice1: "agree",
        choice2: "disagree",
    
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 15

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()