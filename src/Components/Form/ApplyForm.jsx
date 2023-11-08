import PropTypes from 'prop-types';

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import moment from "moment";

// eslint-disable-next-line react/prop-types
const ApplyForm = ({ job }) => {
    const { user } = useAuth();
    const axios = useAxios()
    const { displayName, email } = user;
    const { _id, JobTitle, CompanyLogo, Category, Salary, JobApplicantsNumber, } = job;
    const [applicants, setApplicants] = useState(JobApplicantsNumber)

    const currentDate = moment();
    const SubmitDate = currentDate.format('DD-MM-YYYY');




    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const AppliedInfo = { JobId: _id, CompanyLogo: CompanyLogo, Category: Category, JobTitle: JobTitle, SubmittedDate: SubmitDate, Salary, AppliedCount: applicants, name, email, resume };
        console.log(AppliedInfo)
        // send data to the appliedCollection


        axios.post("/applied", AppliedInfo)
            .then(res => {
                Swal.fire("Submitted!", "Application Successfully Submitted", "success")
                console.log(res.data)
                setApplicants(applicants => applicants + 1);
            })
            .catch(error => {
                console.log(error)
            })

        // fetch("http://localhost:5000/api/v1/applied", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(AppliedInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })

    }


    return (
        <div>
            <div className="hero">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleApply} className="card-body">
                        <p>Please Submit Require Information Carefully</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Name" name="name" placeholder="name" defaultValue={displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" defaultValue={email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume</span>
                            </label>
                            <input type="text" name="resume" placeholder="Resume Link" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};
ApplyForm.propTypes = {
    job: PropTypes.object.isRequired,
};

export default ApplyForm;



 // ***************************************************************************************************



