export default function getListStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.filter(student => student.location === city);
}
