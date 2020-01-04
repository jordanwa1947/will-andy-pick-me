var questionField = document.getElementById('question-field');
var questionButton = document.getElementById('question-button');
var eightBall = document.getElementById('eight-ball');
var questionCont = document.getElementById('question-cont');
var clearButton = document.getElementById('clear-button');

var responses = ['It is certain.',
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."]

questionField.addEventListener('keyup', (event) => {
  if (event.target.value != '') {
    questionButton.disabled = false;
  } else {
    questionButton.disabled = true;
  }
});

questionButton.addEventListener('click', () => {
  var randIndex = Math.floor(Math.random() * responses.length);
  var response = responses[randIndex];
  var question = questionField.value;
  questionField.value = '';
  eightBall.style.display = 'none';
  clearButton.disabled = false;
  questionButton.disabled = true;
  questionCont.style.display = 'flex';
  questionCont.innerHTML = `
  <p class='question'>"${question}"</p>
  <p class='response'>${response}</p>
  `
})

clearButton.addEventListener('click', () => {
  clearButton.disabled = true;
  eightBall.style.display = 'inline';
  questionCont.style.display = 'none';
})
