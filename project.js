let jobsData;

function getJobs() {
    let compE = document.getElementById('companies');
    let titleE = document.getElementById('titleInput');
    let remoteCheckbox = document.getElementById('remoteCheckbox');
    let tagsE = document.getElementById('tagsInput');
    let locationE = document.getElementById('locationInput');

    fetch("https://www.arbeitnow.com/api/job-board-api")
        .then((response) => response.json())
        .then((result) => result.data)
        .then((data) => {
            jobsData = data;

            let companies = [];
            let titles = [];
            let tags = new Set();
            let locations = [];

            data.forEach(job => {
                if (!companies.includes(job.company_name)) {
                    companies.push(job.company_name);
                }
                if (!titles.includes(job.title)) {
                    titles.push(job.title);
                }
                job.tags.forEach(tag => tags.add(tag));
                if (!locations.includes(job.location)) {
                    locations.push(job.location);
                }
            });

            populateDropdown(compE, companies);
            populateDropdown(titleE, titles);
            populateDropdown(tagsE, Array.from(tags));
            populateDropdown(locationE, locations);

            remoteCheckbox.addEventListener('change', filterJobs);
            titleE.addEventListener('change', filterJobs);
            tagsE.addEventListener('change', filterJobs);
            locationE.addEventListener('change', filterJobs);

            renderJobs(data);
        });
}

function populateDropdown(element, items) {
    let sortedItems = items.sort();
    sortedItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.innerHTML = item;
        element.appendChild(option);
    });
}

function renderJobs(jobs) {
    const jobListElement = document.getElementById('jobList');
    jobListElement.innerHTML = '';

    jobs.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-posting');
        jobItem.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>Company: ${job.company_name}</p>
                    <p>Location: ${job.location}</p>
                    <p>Remote: ${job.remote ? 'Yes' : 'No'}</p>
                    <p>Tags: ${job.tags.join(', ')}</p>
                `;
        jobListElement.appendChild(jobItem);
    });
}

function filterJobs() {
    const remoteOnly = document.getElementById('remoteCheckbox').checked;
    const title = document.getElementById('titleInput').value;
    const company = document.getElementById('companies').value;
    const tags = document.getElementById('tagsInput').value;
    const location = document.getElementById('locationInput').value;

    const filteredJobs = jobsData.filter(job => {
        if (remoteOnly && !job.remote) {
            return false;
        }
        if (title && job.title !== title) {
            return false;
        }
        if (company && job.company_name !== company) {
            return false;
        }
        if (tags && !job.tags.includes(tags)) {
            return false;
        }
        if (location && job.location !== location) {
            return false;
        }
        return true;
    });

    renderJobs(filteredJobs);
}

document.addEventListener('DOMContentLoaded', () =>{

    const pages = document.querySelectorAll('.page');

    pages.forEach(el => {

        el.addEventListener('mouseenter', () => {
            anime({
                targets: el, 
                rotate: {
                    value: 360,
                    duration: 1200,
                    easing: 'easeInOutSine'
                  },
                  scale: {
                    value: 1.2,
                    duration: 1500,
                    delay: 250,
                    easing: 'easeInOutQuart'
                  },
                  delay: 100
            })
        })
    })
})

window.onload = getJobs;
