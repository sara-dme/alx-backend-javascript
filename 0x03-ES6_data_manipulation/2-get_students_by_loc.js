export default function getStudentsByLocation(lstStudent, location) {
    return lstStudent.filter(( { loc }) => loc === location);
}