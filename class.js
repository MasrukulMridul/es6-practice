class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "sunfrose school"
    }
}

const student1 = new Student(12,"shovo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(24, "kusul");
console.log(student1.name, student2.name, student3 );
