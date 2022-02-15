import { StudentsRepository } from "../../../../src/application/repositories/students-repository";
import { Student } from "../../../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentsRepository {
  public students: Student[] = []

  async findById(id: string): Promise<Student | null> {
    const student = this.students.find(student => student.id === id)

    if (!student) { return null }

    return student
  }
}