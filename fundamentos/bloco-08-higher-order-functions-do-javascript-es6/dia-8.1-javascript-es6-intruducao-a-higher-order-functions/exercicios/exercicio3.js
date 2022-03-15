const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1){
    if (studentAnswers[index] === rightAnswers[index]) {
      score += 1;
    } else if (studentAnswers[index] === 'N.A') {
      score += 0;
    } else {
      score -= 0.5;
    }
  }
  return score;
}

const studentScore = (rightAnswers, studentAnswers, callback) => {
  return callback(rightAnswers, studentAnswers);
}

console.log(studentScore(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));