# Job Finder

### Project Description:
At Job Finder, our mission is to connect job seekers with their ideal jobs by providing a user-friendly platform that allows for seamless job searching based on companies, titles, and locations. We've included information on various job positons, for those exploring different carrer options, or curious about a specific role. We strive to bridge the gap between employers and potential employees, we hope you enjoy using our application!😊


### Description of Target Browsers (iOS? Android?):
Our target browsers include individuals on both iOS and Android, but for an easier viewing experience, we recommend using a laptop or computer. The API we chose, _Arbeitnow_, only offers job postings for different cities in Germany, so our target browsers would also be individuals searching for a job within Germany. 

## Developers Manual:
INST377 PROJECT - JOB FINDER 
-----------------------------

**How to install application and all dependencies**

For access to all files git clone repo to your local machine. Dependencies can be installed after installing node.js and npm install into the terminal to install npm
and npm init will create the package.json file. 

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
