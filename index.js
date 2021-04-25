const input = require('readline-sync');
name = input.question('name: ');
console.log(`welcome ${name}`);
const questions = [
  {
    question : 'What is approx gravity of moon wrt earth?',
    options : ['1/4','1/5','1/6','1/7'],
    answer : '3'
  },
  {
    question : 'Nearest star to Sun?',
    options : ['Proxima Centuari','Proxima Centuari B','Alpha Centuari A','Alpha Centuari B'],
    answer : '1'
  },
  {
    question : 'First Man to Space?',
    options : ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Bob Behnken'],
    answer : '3'
  },
  {
    question : 'First manned mission to land on the Moon?',
    options : ['Apollo 9','Apollo 11','Apollo 13','Apollo 15'],
    answer : '2'
  },
  {
    question : 'First Indian man to space?',
    options : ['Rakesh Sharma','Ravish Malhotra','Satish Dhavan','Raja Chari'],
    answer : '1'
  }
];

function play(questions){
  let score = 0;
  for(let i = 0;i<questions.length;i++){
    let options = '';
    for(let j = 0;j<questions[i].options.length;j++){
      options += `${j+1}. ${questions[i].options[j]}\n`;
    }
    answer = input.question(questions[i].question+'\n'+options);
    if(answer === questions[i].answer){
      console.log('Correct!');
      score += 10;
    }
    else{
      console.log('Wrong!') ;
    }
    console.log(`Your answer: ${questions[i].options[answer-1]}`);
    console.log(`Correct answer: ${questions[i].options[questions[i].answer-1]}`);
  }
  console.log(`Your Score: ${score}`)
}

play(questions)