INST377 PROJECT - JOB FINDER 
-----------------------------

**How to install application and all dependencies**

Dependencies can be installed after installing node.js and npm install into the terminal to install npm. 

JS libraries used include the **animejs library** and the **bootstrapjs**. 

**How to run your application on a server**

To run the JOB FINDER application on a server use the deployed link: 
**https://377-project-two.vercel.app/** 

**How to run any tests you have written for your software**

To run tests for our software use npm start in the terminal. 

**API ENDPOINTS**

API endpoints used in our application include:
1. https://www.arbeitnow.com/api/job-board-api
2. https://377-project-two.vercel.app/jobs
3. https://377-project-two.vercel.app/skills 

- The arbeitnow API is the front end API we used in the JOBS page. 
This API fetches the different jobs with their information. We've incorporated 
filtering for users to filter out jobs based on the different attributes in the API. 

- The first backend API we used connects to the jobs table we made in supabase where users get access
to different jobs, interesting facts about the job and satisfaction of the job. 
We incorporated the API into the front end by displaying an information table in the 
information page. 

- The second backend API also connects to skill table we made in supabase where users 
get informtion on different required skills for a job, as well as the education required for the job. 
This is incorporated into the front end as we fetched the API to display a table 
in the information page. 


**A clear set of expectations around known bugs and a road-map for future development**
- For future development, we would consider future features like accounts for users, 
and more interactive options like directing users to external sites to apply for the jobs. 
