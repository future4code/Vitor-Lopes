import { Student } from "./Student"
import { Teacher, TEACHER_SPECIALTY } from "./Teacher"

//Students
const vitor: Student = new Student(1, 'vitor lopes', 'email@email.com', 1985, ['o de seda'])
vitor.setNewStudent(vitor)
const rafael: Student = new Student(2, 'Rafael lopes', 'email@email.com', 1981, ['hobbie não é aquele elfo do HP?'])
rafael.setNewStudent(rafael)

//Teachers
const Amanda: Teacher = new Teacher(1, 'Amanda Rangel', 'email@email.com.br', [TEACHER_SPECIALTY.OOP])
Amanda.setNewTeacher(Amanda)
const Soter: Teacher = new Teacher(2, 'Soter Padua', 'email@email.com.br', [TEACHER_SPECIALTY.OOP])
Soter.setNewTeacher(Soter)
const Goli: Teacher = new Teacher(3, 'João Golias', 'email@email.com.br', [TEACHER_SPECIALTY.OOP])
Goli.setNewTeacher(Goli)
const Joao: Teacher = new Teacher(4, 'João Alves', 'email@email.com.br', [TEACHER_SPECIALTY.OOP])
Joao.setNewTeacher(Joao)


