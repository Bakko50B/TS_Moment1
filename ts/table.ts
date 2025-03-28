interface Course {
    courseCode: string;
    courseName: string;
    syllabus: string;
    progression: 'A' | 'B' | 'C';
}

const initialData: Course[] = [
    { courseCode: 'DT057G', courseName: 'Webbutveckling I', syllabus: 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/', progression: 'A' },
    { courseCode: 'DT084G', courseName: 'Introduktion till programmering i JavaScript', syllabus: 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/', progression: 'A' },
];

let tableArray: Course[] = JSON.parse(localStorage.getItem('tableArray') || '[]');

if (tableArray.length === 0) {
    tableArray = initialData;
    localStorage.setItem('tableArray', JSON.stringify(tableArray)); 
}

function updateTable(): void {
    const tableBody = document.getElementById('tableBody') as HTMLTableSectionElement;
    tableBody.innerHTML = ''; // Töm tabellen
    tableArray.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.courseCode}</td>
            <td>${item.courseName}</td>
            <td>${item.syllabus}</td>
            <td>${item.progression}</td>    
        `;
        tableBody.appendChild(row);
    });
}

updateTable();



