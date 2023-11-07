import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import MyJobTableRow from "../Components/AppliedComponents/MyJobTableRow";
import Swal from 'sweetalert2';
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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`jobsdata/${id}`)
                    .then(data => {
                        console.log(data)
                        if (data.data.deletedCount) {
                            Swal.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success" });
                            const remaining = allPosted.filter(post => post._id !== id);
                            setAllPosted(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        Swal.fire({ title: "Sorry!", text: "Something Wen Wrong", icon: "error" });
                    })

            }
        });
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Id</th>
                            <th>Company</th>
                            <th>Job</th>
                            <th>Category</th>
                            <th>Salary</th>
                            <th>Applied</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPosted?.map(jobCard => <MyJobTableRow key={jobCard._id} handleDelete={handleDelete} jobCard={jobCard}></MyJobTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_Job;