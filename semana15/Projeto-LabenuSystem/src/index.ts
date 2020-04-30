import { Student } from "./Student"
import { Teacher } from "./Teacher"

const newStudent: Student = new Student(1, 'vitor lopes', 'email@email.com', 1985, ['o de seda'])
console.log(`${newStudent.name} tem ${newStudent.getAge()} anos.`)

const newTeacher: Teacher = new Teacher(2, 'prof vitor', 'email@emailll.com', [])
console.log(newTeacher)