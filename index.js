const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require ('express')

const app = express ()
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname))

const supabaseUrl = 'https://ylnoivfamvpdlenekqaq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsbm9pdmZhbXZwZGxlbmVrcWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTExNDksImV4cCI6MjAzMTQ2NzE0OX0.TeAV6TRJdklSEN6hlRUmzDUoxBucOYuFGcsZpEqbxqQ'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)


app.get('/',(req, res) =>{
    res.sendFile('home.html', {root: __dirname})
})

app.get('/jobs', async (req, res)=> {
    console.log('Attempting to GET all jobs')

    const { data, error } = await supabase
        .from('jobs')
        .select()
    if (error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})

app.post('/job', async(req, res) => {
    console.log('Adding Job')

    console.log(req.body)
    var jobName = req.body.jobName;
    var jobFact = req.body.jobFact;
    var satisfaction = req.body.satisfaction;

    const { data, error } = await supabase
        .from('jobs')
        .insert({ "job_name":jobName, "job_fact": jobFact, "job_satisfaction":satisfaction})
        .select()

        if (error) {
            console.log('Error')
            res.send(error)
        } else {
            res.send(data)
        }
})


app.get('/skills', async (req, res)=> {
    console.log('Attempting to GET all skills')

    const { data, error } = await supabase
        .from('skills')
        .select()
    if (error) {
        console.log('Error')
        res.send(error)
    } else {
        res.send(data)
    }
})

app.post('/skill', async(req, res) => {
    console.log('Adding Job')

    console.log(req.body)
    var jobTitle = req.body.jobTitle;
    var jobSkill = req.body.jobSkill;
    var jobEducation = req.body.jobEducation;

    const { data, error } = await supabase
        .from('skills')
        .insert({ "title":jobTitle, "the_skills": jobSkill, "education":jobEducation})
        .select()

        if (error) {
            console.log('Error')
            res.send(error)
        } else {
            res.send(data)
        }
})
app.listen(port, () => {
    console.log('APP IS WORKING')
})
