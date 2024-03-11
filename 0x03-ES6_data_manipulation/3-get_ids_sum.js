export default function getStudentIdSum(lstStudents) {
    return lstStudents.reduce((x, { id }) => x + id, 0);
}