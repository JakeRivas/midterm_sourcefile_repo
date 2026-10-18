let scores = [85, 72, 91, 64, 78];
let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");
for(let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}
console.log();
for(let i = 0; i < scores.length; i++) {
    let remark = "";
    if(scores[i] >= 90) {
        remark = "Execellent - Passed";
        passed++;
    }else if(scores[i] >= 80) {
        remark = "Very Good - Passed";
        passed++;
    }else if(scores[i] >= 75) {
        remark = "Good - Passed";
        passed++;
    }else {
        remark = "Failed";
        failed++;
    }
console.log("Student " + (i + 1) + ": " + scores[i] + " - " + remark);

total += scores[i];

if(scores[i] > highest) {
    highest = scores[i];
}

if(scores[i] < lowest) {
    lowest = scores[i];
}
}

console.log();

let average = total/scores.length;

console.log("Total Scores: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);

