import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";

const My_Job = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const [allPosted, setAllPosted] = useState([]);
    useEffect(() => {
        axios.get(`/jobsdata?email=${user.email}`)
            .then(res => {
                setAllPosted(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axios, user.email])
    console.log(allPosted)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_Job;