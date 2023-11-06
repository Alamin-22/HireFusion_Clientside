import { useLoaderData } from "react-router-dom";
import ApplyForm from "../Form/ApplyForm";

const JobDetails = () => {
    const job = useLoaderData();
    const { _id, JobTitle, CompanySlogan, CompanyLogo, Category, ApplicationStartDate, ApplicationEndDate, Salary, JobApplicantsNumber, JobBanner, LoggedInUser, DetailDescription } = job;
    return (
        <div>
            <div className="max-w-2xl px-8 mx-auto py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <figure >
                    <img src={JobBanner} alt="job Related banner" className=" mx-auto" />
                </figure>
                <div className="mt-7 flex justify-between">

                    <div>
                        <p className="text-gray-600 dark:text-gray-300 font-bold">Job Title:</p>
                        <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline cursor-pointer" tabIndex="0" role="link"> {JobTitle}</p>
                        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                            {CompanySlogan}</p>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://i.ibb.co/gwD0nQs/LogoJob.png" />
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer hover:underline" tabIndex="0" role="link">
                        Description
                    </p>
                    {DetailDescription}
                </div>
                <div className="mt-5">
                    <p className="text-lg  text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Salary: {Salary}</p>
                    <p className="text-lg  text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Applied: {JobApplicantsNumber}</p>
                    <p className="text-lg  text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Category: <span className="font-semibold">{Category}</span></p>
                </div>
                <div className="mt-1 flex justify-between items-end ">
                    <div>
                        <p className="text-lg  text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Application Start: {ApplicationStartDate}</p>
                        <p className="text-lg  text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Application End: {ApplicationEndDate}</p>
                        <p className="text-lg  text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">Posted By: {LoggedInUser}</p>

                    </div>
                    {/* <button className="btn btn-primary ">Apply</button> */}
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}>Apply</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <ApplyForm></ApplyForm>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;