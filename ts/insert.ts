interface Course {
    courseCode: string;
    courseName: string;
    syllabus: string;
    progression: 'A' | 'B' | 'C';
}

const form = document.getElementById('dataForm') as HTMLFormElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const progressionInput = (form.elements.namedItem('progression') as HTMLInputElement).value;
    const courseCodeInput = (form.elements.namedItem('courseCode') as HTMLInputElement).value;

    // Hämta existerande data från localStorage
    const tableArray: Course[] = JSON.parse(localStorage.getItem('tableArray') || '[]');

    // Kontrollera om kurskoden redan finns
    const isDuplicate = tableArray.some(course => course.courseCode === courseCodeInput);
    if (isDuplicate) {
        alert('Kurskoden finns redan. Ange en unik kurskod.');
        return; // Avbryt om kurskoden inte är unik
    }

    
    if (progressionInput === 'A' || progressionInput === 'B' || progressionInput === 'C') {
        const newItem: Course = {
            courseCode: courseCodeInput,
            courseName: (form.elements.namedItem('courseName') as HTMLInputElement).value,
            syllabus: (form.elements.namedItem('syllabus') as HTMLInputElement).value,
            progression: progressionInput as 'A' | 'B' | 'C'
        };

        // Lägg till den nya kursen och uppdatera localStorage
        tableArray.push(newItem);
        localStorage.setItem('tableArray', JSON.stringify(tableArray));

        form.reset();

        alert('Kursen har lagts till!');
        window.location.href = 'index.html'; // Redirect till index.html
    } else {
        alert('Ogiltigt värde för progression! Endast A, B eller C är tillåtet.');
    }
});
