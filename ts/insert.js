// import { Course } from "./interface";
var form = document.getElementById('dataForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var progressionInput = form.elements.namedItem('progression').value;
    var courseCodeInput = form.elements.namedItem('courseCode').value;
    // Hämta existerande data från localStorage
    var tableArray = JSON.parse(localStorage.getItem('tableArray') || '[]');
    // Kontrollera om kurskoden redan finns
    var isDuplicate = tableArray.some(function (course) { return course.courseCode === courseCodeInput; });
    if (isDuplicate) {
        alert('Kurskoden finns redan. Ange en unik kurskod.');
        return; // Avbryt om kurskoden inte är unik
    }
    if (progressionInput === 'A' || progressionInput === 'B' || progressionInput === 'C') {
        var newItem = {
            courseCode: courseCodeInput,
            courseName: form.elements.namedItem('courseName').value,
            syllabus: form.elements.namedItem('syllabus').value,
            progression: progressionInput
        };
        // Lägg till den nya kursen och uppdatera localStorage
        tableArray.push(newItem);
        localStorage.setItem('tableArray', JSON.stringify(tableArray));
        form.reset();
        alert('Kursen har lagts till!');
        window.location.href = 'index.html'; // Redirect till index.html
    }
    else {
        alert('Ogiltigt värde för progression! Endast A, B eller C är tillåtet.');
    }
});
