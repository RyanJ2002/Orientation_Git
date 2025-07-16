// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- YOUR DATA GOES HERE ---
    // This is an array of objects. Each object represents one lecture.
    // Just add new objects to this list to add more rows to the table.
    const lectures = [
        {
            name: 'Introduction to Machine Learning',
            url: 'https://www.notion.so/your-username/your-page-id-1' // Replace with your actual Notion link
        },
        {
            name: 'Deep Learning Fundamentals',
            url: 'https://www.notion.so/your-username/your-page-id-2' // Replace with your actual Notion link
        },
        {
            name: 'Website Design Principles',
            url: 'https://www.notion.so/your-username/your-page-id-3' // Replace with your actual Notion link
        },
        {
            name: 'JavaScript for Beginners',
            url: 'https://www.notion.so/your-username/your-page-id-4' // Replace with your actual Notion link
        }
        // Add more lectures here...
        // {
        //     name: 'Another Lecture',
        //     url: 'https://...'
        // }
    ];

    // Get a reference to the table body element from the HTML
    const tableBody = document.getElementById('table-body');

    // Loop through each lecture in the 'lectures' array
    lectures.forEach(lecture => {
        // 1. Create a new table row element
        const row = document.createElement('tr');

        // 2. Create the first cell for the lecture name
        const nameCell = document.createElement('td');
        nameCell.textContent = lecture.name; // Set its text to the lecture name
        row.appendChild(nameCell); // Add the cell to the row

        // 3. Create the second cell for the link
        const linkCell = document.createElement('td');
        const link = document.createElement('a'); // Create an anchor (<a>) tag
        link.href = lecture.url; // Set the link's destination
        link.textContent = 'View in Notion'; // Set the link's visible text
        link.target = '_blank'; // Opens the link in a new tab
        link.rel = 'noopener noreferrer'; // Security best practice for target="_blank"
        
        linkCell.appendChild(link); // Add the link to the cell
        row.appendChild(linkCell); // Add the cell to the row

        // 4. Add the completed row to the table body in the HTML
        tableBody.appendChild(row);
    });

});