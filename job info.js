async function loadJobData () {
    await fetch ('https://groupapi.vercel.app/jobs')
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res)

            var table = document.createElement('table')
            table.setAttribute('id', 'jobInfo')

            var tableRow = document.createElement('tr')
            var tableHeading1 = document.createElement('th')
            tableHeading1.innerHTML = 'Job Name'
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th')
            tableHeading2.innerHTML = 'Job Fact'
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th')
            tableHeading3.innerHTML = 'Job Satisfaction'
            tableRow.appendChild(tableHeading3)

            table.appendChild(tableRow)

            res.forEach(job => {
                var jobRow = document.createElement('tr')
                var job_name = document.createElement('td')
                var job_fact = document.createElement('td')
                var job_satisfaction = document.createElement('td')

                job_name.innerHTML = job.job_name
                jobRow.appendChild(job_name)

                job_fact.innerHTML = job.job_fact
                jobRow.appendChild(job_fact)

                job_satisfaction.innerHTML = job.job_satisfaction
                jobRow.appendChild(job_satisfaction)

                table.appendChild(jobRow)

            });
            const preExistingTable = document.getElementById('jobInfo')
            if (preExistingTable) {
                preExistingTable.remove()
            }
            var cutoff = document.getElementById('cutoff')
            cutoff.insertAdjacentElement('beforebegin', table)
        })

}
window.onload = loadJobData();