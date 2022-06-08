class Student {
    #name;
    #subjects;
    constructor(name) {
        this.#name = name;
        this.#subjects = ['Javascript', 'HTML', 'CSS'];
    }

    getData() {
        return {
            name: this.#name,
            subjects: this.#subjects
        }
    }
}

const studentA = new Student('Juan');

console.log(studentA.getData());