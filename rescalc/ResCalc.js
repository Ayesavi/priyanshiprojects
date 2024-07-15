class Exam {
    constructor(finalExam1, finalExam2, midExam1, midExam2) {
        // fetching the marks from the Exam object
        this.finalExam1 = finalExam1;
        this.finalExam2 = finalExam2;
        this.midExam1 = midExam1;
        this.midExam2 = midExam2;
    }
}

class ResCalc {
    constructor(name, exams) {
        // fetching the name and exam marks from the Exam object
        this.name = name;
        this.exams = exams;
    }
    calculateResult() {
        const finalExamTotal = this.exams.finalExam1 + this.exams.finalExam2; // since 2 final exams
        const midExamTotal = this.exams.midExam1 + this.exams.midExam2; // since 2 mid exams

        const finalExam = (finalExamTotal/160) * 80; // 80% of each final exam of 80 marks
        const midExam = (midExamTotal/80) * 20; // 20% of each mid exam of 40 marks

        const result = finalExam + midExam;

        // displaying student name and their final result
        return result;
    }
}

// Object Creation
const name1 = "Peter";
const exams1 = new Exam(60, 75, 37, 35)
const student1 = new ResCalc(name1, exams1);
const result1 = student1.calculateResult();
console.log(`Name: ${name1}  Result: ${result1}`);

const name2 = "Grace";
const exams2 = new Exam(70, 75, 27, 33)
const student2 = new ResCalc(name2, exams2);
const result2 = student2.calculateResult();
console.log(`Name: ${name2}  Result: ${result2}`);

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