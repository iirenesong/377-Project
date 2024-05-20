async function loadSkills () {
    await fetch ('https://377-project-two.vercel.app/skills')
        .then ((res) => res.json())
        .then ((res) => {
            console.log(res)

            var skillsTable = document.createElement('table')
            skillsTable.setAttribute('id', 'skillsInfo')

            var tableRow = document.createElement('tr')
            var tableHeading1 = document.createElement('th')
            tableHeading1.innerHTML = 'Job Title'
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th')
            tableHeading2.innerHTML = 'Required Skills'
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th')
            tableHeading3.innerHTML = 'Required Education'
            tableRow.appendChild(tableHeading3)

            skillsTable.appendChild(tableRow)

            res.forEach(job => {
                var skillRow = document.createElement('tr')
                var title = document.createElement('td')
                var the_skills = document.createElement('td')
                var education= document.createElement('td')

                title.innerHTML = job.title
                skillRow.appendChild(title)

                the_skills.innerHTML = job.the_skills
                skillRow.appendChild(the_skills)

                education.innerHTML = job.education
                skillRow.appendChild(education)

                skillsTable.appendChild(skillRow)

            });
            const preExistingTable = document.getElementById('skillsInfo')
            if (preExistingTable) {
                preExistingTable.remove()
            }
            var cutoff = document.getElementById('skillsTable')
            cutoff.insertAdjacentElement('beforebegin', skillsTable)
        })

}
window.onload = loadSkills();
