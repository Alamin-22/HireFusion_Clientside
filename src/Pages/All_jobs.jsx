
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import AllJobPageCard2 from "../Components/AllPageComponents/AllJobPageCard2";
import LoadingSk from "../Components/loading/LoadingSk";
import { GoSearch } from 'react-icons/go';
import { Helmet } from "react-helmet-async";

const All_jobs = () => {
    const axios = useAxios();
    const [allJobs, setAllJobs] = useState([]);
    // to store search data
    const [searchTerm, setSearchTerm] = useState(''); 
    // to store the filtered jobs
    const [filteredJobs, setFilteredJobs] = useState([]); 

    useEffect(() => {
        axios.get('/jobsdata')
            .then(res => {
                setAllJobs(res.data);
                setFilteredJobs(res.data); 
            })
            .catch(error => {
                console.log(error);
            });
    }, [axios]);

    const handleSearch = () => {
        const filtered = allJobs.filter(job =>
            job.JobTitle && job.JobTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredJobs(filtered);
    };

    return (
        <div>
            <Helmet><title>Hire Fusion | All Jobs</title></Helmet>

            {allJobs.length === 0 ? (
                <LoadingSk />
            ) : (
                <div className="max-w-7xl my-3">
                    <div className="md:flex md:justify-center mx-5">
                        <div className="md:w-1/2 mb-5">
                            <h1 className="text-xl text-center font-semibold text-gray-700">
                                Search By Job Title
                            </h1>
                            <div>
                                <div className="flex md:w-full flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:space-x-0 md:flex-row md:justify-center">
                                    <input
                                        type="text"
                                        className="md:w-3/4 md:rounded-r-none px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                        placeholder="Search By Job Title"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button
                                        className="w-full btn btn-primary md:rounded-l-none md:w-auto md:mx-4"
                                        onClick={handleSearch}
                                    >
                                        <GoSearch />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 space-y-1">
                        {filteredJobs.map(job => (
                            <AllJobPageCard2 key={job._id} job={job} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default All_jobs;
