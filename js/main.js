const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getArrayFromStr = (array) => {
    return array.split(',').map(parseFloat);
}

const getAverage = (numbers) => {
    const sum = numbers.reduce((total, number) => {
        return total += number;
    }, 0)
    return (sum / numbers.length);
}

const getStudent = (studentName) => {
    return students.find((student) => student.name === studentName);
}
const correctName = (name) => {
    return (name[0].toUpperCase() + name.slice(1).toLowerCase()).replace("_", " ");
}
const getSubjects = (studentName) => {
    const subjectsArray = Object.keys(getStudent(studentName).subjects);
    return subjectsArray.map((subject) => correctName(subject));
}

const getAverageMark = (studentName) => {
    const marks = Object.values(getStudent(studentName).subjects);
    const averageMark = marks.reduce((total, mark) => {
        return total += getAverage(mark);
    }, 0)
    return (averageMark / marks.length).toFixed(2);
}

const getStudentInfo = (studentName) => {
    return `Course: ${getStudent(studentName).course} \nName: ${studentName} \nAverage mark: ${getAverageMark(studentName)}`;
}

const getStudentsNames = (students) => {
    return students.map((student) => student.name).sort();
}

const getBestStudent = (students) => {
    let bestStudent = "";
    let averageMark = 0;
    students.forEach((student, index) => {
        if (getAverageMark(student.name) > averageMark) bestStudent = student.name;
    })
    return bestStudent;
}

const calculateWordLetters = (word) => {
    return word.split("").reduce((total, letter, index, source) => {
        total[letter] = source.filter((item) => item === letter).length;
        return total;
    }, {});
}

console.log(`Найкращий студент: ${getBestStudent(students)}`);
console.log(`Інформація про студента: ${getStudentInfo("Tanya")}`);
console.log(`Відсортовані за алфавітом імена студентів: ${getStudentsNames(students)}`);
console.log(`Середня оцінка по усім предметам: ${getAverageMark("Victor")}`);
console.log(`Список предметів: ${getSubjects("Tanya")}`);
console.log("calculateWordLetters:");
console.log(calculateWordLetters("calculateWordLetters"));