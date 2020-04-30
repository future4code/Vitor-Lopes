import { Student } from "./Student"
import { Teacher } from "./Teacher"
import { JSONFileManager } from "./JSONFileManager";

const vitor: Student = new Student(1, 'vitor lopes', 'email@email.com', 1985, ['o de seda'])
vitor.setNewStudent2(vitor)
const rafael: Student = new Student(2, 'rafael lopes', 'email@email.com', 1981, ['o de seda'])
rafael.setNewStudent2(rafael)
const Amanda: Student = new Student(3, 'Amanda lopes', 'email@email.com', 1981, ['o de seda'])
Amanda.setNewStudent2(Amanda)


