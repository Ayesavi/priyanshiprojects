const { Exam, ResCalc } = require('.ResCalc.js');
// Unit Test Function
function assertResult(testName, actual, expected) {
    if (actual === expected) {
        console.log(`Passed: ${testName} with Expected ${expected}, and Actual ${actual}`);
    } else {
        console.error(`Failed: ${testName}. Expected ${expected}, but got ${actual}`);
    }
}

// Unit Test 1: Normal case
function testCalculateResultNormalCase() {
    const exams = new Exam(60, 75, 37, 35);
    const student = new ResCalc("Peter", exams);
    const result = student.calculateResult();

    // expected final result
    const expectedResult = ((60+75)/160)*80 + ((37+35)/80)*20;

    assertResult("Normal Case", result, expectedResult);
}

// Unit Test 2: Edge case with perfect scores
function testCalculateResultPerfectScores() {
    const exams = new Exam(80, 80, 40, 40);
    const student = new ResCalc("Grace", exams);
    const result = student.calculateResult();

    // expected final result
    const expectedResult = ((80+80)/160)*80 + ((40+40)/80)*20;

    assertResult("Perfect Scores Case", result, expectedResult);
}

// Run Unit Tests
testCalculateResultNormalCase();
testCalculateResultPerfectScores();