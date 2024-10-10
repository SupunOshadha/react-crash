
import React, { useEffect, useState } from 'react';
//import jobs from '../jobs.json';
import JobList from './JobList';

const JobListings = ({isHome = false}) => {
    // console.log(jobs);
    //const jobListings = isHome? jobs.slice(0, 3) : jobs; //limiting to 3 jobs
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {                                   //fetching from API
      const fetchJobs = async() => {
        try{
          const res = await fetch('http://localhost:8000/jobs')
          const data = await res.json();
          setJobs(data);
        }catch(error){
          console.log('Error fetching data', error);
        }finally{
          setLoading(false);
        }
      }
      fetchJobs();
    },
  []);
   
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome? 'Recent Jobs':'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map(job=> (
            <JobList key={job.id} job={job} />
        )) }
        </div>
        </div>
        </section>      
  )
}

export default JobListings;