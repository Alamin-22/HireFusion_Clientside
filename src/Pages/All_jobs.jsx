import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import AllJobCard from "../Components/JobsByCategory/JobCardByCategory/AllJobCard";

const All_jobs = () => {
    const axios = useAxios();
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        axios.get('/jobsdata')
            .then(res => {
                setAllJobs(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axios])
    return (
        <div className="max-w-7xl my-3">

            {
                allJobs.map(job => <AllJobCard job={job}></AllJobCard> )
            }

        </div>
    );
};

export default All_jobs;