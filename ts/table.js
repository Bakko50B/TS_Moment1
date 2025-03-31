// Sparar dessa som bortkommentarad kod. 
// Får det inte att fungera
// import { Course } from "./interface";
var initialData = [
    { courseCode: 'DT057G', courseName: 'Webbutveckling I', syllabus: 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/', progression: 'A' },
    { courseCode: 'DT084G', courseName: 'Introduktion till programmering i JavaScript', syllabus: 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/', progression: 'A' },
];
var tableArray = JSON.parse(localStorage.getItem('tableArray') || '[]');
if (tableArray.length === 0) {
    tableArray = initialData;
    localStorage.setItem('tableArray', JSON.stringify(tableArray));
}
function updateTable() {
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Töm tabellen
    tableArray.forEach(function (item) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(item.courseCode, "</td>\n            <td>").concat(item.courseName, "</td>\n            <td>").concat(item.syllabus, "</td>\n            <td>").concat(item.progression, "</td>    \n        ");
        tableBody.appendChild(row);
    });
}
updateTable();
