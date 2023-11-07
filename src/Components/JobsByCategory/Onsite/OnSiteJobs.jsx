import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import AllJobCard from "../JobCardByCategory/AllJobCard";

const OnSiteJobs = () => {
    const [onSiteJobs, setOnSiteJobs] = useState([]);
    const axios = useAxios()

    useEffect(() => {
        axios.get(`/jobsdata?Category=OnSite`)
            .then(res => {
                setOnSiteJobs(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axios])



    return (
        <div className="space-y-1">
            {
                onSiteJobs.slice(0,8).map(job => <AllJobCard key={job._id} job={job}></AllJobCard>)
            }
        </div>
    );
};

export default OnSiteJobs;