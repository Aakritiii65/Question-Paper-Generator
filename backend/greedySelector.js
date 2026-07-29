// function selectQuestions(questions, totalMarks) {
//   questions.sort((a, b) => b.marks - a.marks);
//   const selected = [];
//   let current = 0;

//   for (const q of questions) {
  
//     if (current + q.marks <= totalMarks) {
//       selected.push(q);
//       current += q.marks;
//     }
//     if (current === totalMarks) break;
//   }

//   return selected;
// }

// module.exports = selectQuestions;

function selectQuestions(questions, totalMarks) {
  // sorted in descending order of marks
  questions.sort((a, b) => parseInt(b.marks) - parseInt(a.marks));

  const selected = [];
  let current = 0;

  for (const q of questions) {
    const marks = parseInt(q.marks); //parsing into int

    if (current + marks <= totalMarks) {
      selected.push(q);
      current += marks;
    }

    if (current === totalMarks) break;
  }

  return selected;
}

module.exports = selectQuestions;

