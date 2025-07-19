// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // --- YOUR DATA GOES HERE ---
    // This is an array of objects. Each object represents one lecture.
    // Just add new objects to this list to add more rows to the table.
    const lectures = [
        {
          name: 'Home',
          url: 'https://www.notion.so/23209be73bbd80af8b8efcff9d95afc0?v=23209be73bbd80dd9062000cc7a24521&source=copy_link'
        },
        {
            name: 'Python',
            url: 'https://www.notion.so/Python-23209be73bbd805f9b81e0892a5d31dd?source=copy_link' // Replace with your actual Notion link
        },
        {
            name: 'Biostatistic',
            url: 'https://www.notion.so/Biostatistic-23209be73bbd80479f19f90603252adc?source=copy_link' // Replace with your actual Notion link
        },
        {
            name: 'Github + Html',
            url: 'https://ryanj2002.github.io/Orientation_Git/' // Replace with your actual Notion link
        },
        {
            name: 'ML I',
            url: 'https://www.notion.so/ML-I-23309be73bbd80768213ee008cc63635?source=copy_link' // Replace with your actual Notion link
        },
        {
            name: 'ML II',
            url: 'KMeans.html' // Replace with your actual Notion link
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
        link.textContent = 'View'; // Set the link's visible text
        link.target = '_blank'; // Opens the link in a new tab
        link.rel = 'noopener noreferrer'; // Security best practice for target="_blank"
        
        linkCell.appendChild(link); // Add the link to the cell
        row.appendChild(linkCell); // Add the cell to the row

        // 4. Add the completed row to the table body in the HTML
        tableBody.appendChild(row);
    });

});

document.addEventListener('DOMContentLoaded', function() {
    
    const navItems = document.querySelectorAll('.sidebar-nav li');
    const viewPanes = document.querySelectorAll('.view-pane');

    // =================================================================
    // NEW FUNCTION TO PRELOAD IMAGES
    // =================================================================
    function preloadBackgroundImages() {
        console.log("Preloading background images...");
        navItems.forEach(item => {
            // Get the background image URL from the data attribute
            const bgImage = item.dataset.bg;
            
            // Check if the data-bg attribute exists
            if (bgImage) {
                // Create a new Image object in memory
                const img = new Image();
                // Set its source to the image URL. This triggers the download.
                img.src = bgImage;
            }
        });
    }

    // Function to set the initial background on page load
    function setInitialBackground() {
        const activeItem = document.querySelector('.sidebar-nav li.active');
        if (activeItem) {
            const initialBg = activeItem.dataset.bg;
            if (initialBg) {
                document.body.style.backgroundImage = `url('${initialBg}')`;
            }
        }
    }

    // Add click event listener to each navigation item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Check if the item has a 'data-view' attribute.
            // This prevents errors for links that go to other pages (like your achievements.html).
            if (!this.dataset.view) {
                return; // Do nothing if it's a simple link
            }

            const viewId = this.dataset.view;
            const bgImage = this.dataset.bg;

            // --- 1. Update the Active State for Navigation ---
            const currentActiveItem = document.querySelector('.sidebar-nav li.active');
            if (currentActiveItem) {
                currentActiveItem.classList.remove('active');
            }
            this.classList.add('active');

            // --- 2. Update the Visible Content Pane ---
            const currentActivePane = document.querySelector('.view-pane.active');
            if (currentActivePane) {
                currentActivePane.classList.remove('active');
            }
            document.getElementById(viewId).classList.add('active');

            // --- 3. Update the Body Background Image ---
            if (bgImage) {
                document.body.style.backgroundImage = `url('${bgImage}')`;
            }
        });
    });
    
    // --- CALL THE NEW AND EXISTING FUNCTIONS ON PAGE LOAD ---
    setInitialBackground();
    preloadBackgroundImages(); // <-- This is the new part!

});