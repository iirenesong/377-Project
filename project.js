function getJobs() {
    let compE = document.getElementById('companies')
    fetch("https://www.arbeitnow.com/api/job-board-api")
        .then((response) => response.json())
        .then((result) => result.data)
        .then((data) => {
            //console.log(data);

            let jobs = []
            data.forEach(job => {
                if (!jobs.includes(job.company_name)) {
                    jobs.push(job.company_name);
                }
            });

            let sortedJobs = jobs.sort()
            sortedJobs.forEach(compa => {
                const option = document.createElement('option')
                option.value = compa
                option.innerHTML = compa
                
                compE.appendChild(option)
            })

        })

}

window.onload = getJobs;