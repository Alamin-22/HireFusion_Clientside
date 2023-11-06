import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import AllJobPageCard from "../Components/AllPageComponents/AllJobPageCard";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-7">
                {
                    allJobs.map(job => <AllJobPageCard key={job._id} job={job}></AllJobPageCard>)
                }
            </div>


        </div>
    );
};

export default All_jobs;