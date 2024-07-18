class student {
    constructor(name, rollno) {
       this.name=name
       this.rno=rollno
    }
    details() {
        console.log("This are the details about the Student")
    }
    Name(){
        console.log("Your name is : "+ this.name)
    }
    RollNo(){
        console.log("Your roll no is : "+ this.rno)
    }
}

let Vaidehi = new student("Vaidehi",14)
Vaidehi.details()
Vaidehi.Name()
Vaidehi.RollNo()

let B = new student("Jeet",17)
B.details()
B.Name()
B.RollNo()