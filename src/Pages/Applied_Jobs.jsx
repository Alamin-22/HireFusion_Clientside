import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import AppliedTblRow from "../Components/AppliedComponents/AppliedTblRow";

const Applied_Jobs = () => {
    const { user } = useAuth();
    const axios = useAxios();

    const [applieds, setApplieds] = useState([]);

    useEffect(() => {
        axios.get(`/applied?email=${user?.email}`)
            .then(res => {
                setApplieds(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axios, user.email])




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Salary</th>
                            <th>Submitted Date</th>
                            <th>Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            applieds.map(applied => <AppliedTblRow key={applied._id} applied={applied}></AppliedTblRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Applied_Jobs;