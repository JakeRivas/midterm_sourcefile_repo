'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// Display every student's index, name, and score.
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

// Add Faith and score 88 at the end.
studentNames.push('Faith');
studentScores.push(88);

// Add Aaron and score 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// Remove first student.
studentNames.shift();
studentScores.shift();

// Remove last student.
studentNames.pop();
studentScores.pop();

// Find Daniel's index.
let danielIndex = studentNames.indexOf('Daniel');

// Remove Daniel and his score.
if (danielIndex != -1) {
  studentNames.splice(danielIndex, 1);
  studentScores.splice(danielIndex, 1);
}

// Insert Grace and score 82 at index 2.
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');

// Calculate total score.
let totalScore = 0;

for (let i = 0; i < studentScores.length; i++) {
  totalScore += studentScores[i];
}

// Calculate average score.
let averageScore = totalScore / studentScores.length;

// Find highest and lowest score.
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }

  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

// Passing score is 75.
const passingScores = studentScores.filter(score => score >= 75);

const statuses = studentScores.map(score =>
  score >= 75 ? 'Passed' : 'Failed'
);

const atLeastOneFailed = studentScores.some(score => score < 75);

const allStudentsPassed = studentScores.every(score => score >= 75);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

console.log('\nPART F: SORT AND SEARCH');

// Create a copy of scores.
const sortedScores = Array.from(studentScores);

// Sort highest to lowest.
sortedScores.sort((a, b) => b - a);

// Search for 91.
const contains91 = studentScores.includes(91);
const index91 = studentScores.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', index91);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// Process activity scores using nested loops.
for (let i = 0; i < activityScores.length; i++) {
  let rowTotal = 0;

  for (let j = 0; j < activityScores[i].length; j++) {
    console.log(
      `${originalNames[i]} Activity ${j + 1}: ${activityScores[i][j]}`
    );

    rowTotal += activityScores[i][j];
  }

  let rowAverage = rowTotal / activityScores[i].length;

  activityAverages.push(Number(rowAverage.toFixed(2)));

  console.log(
    `${originalNames[i]}'s activity average: ${rowAverage.toFixed(2)}`
  );
}

console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');

// Display all current student names in one line.
console.log('Students:', studentNames.join(' | '));