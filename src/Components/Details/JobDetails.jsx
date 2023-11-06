import { useLoaderData } from "react-router-dom";

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
                    <button className="btn btn-primary ">Apply</button>
                </div>
                {/* <div className="flex items-center justify-end mt-4">
                    <div className="flex items-center">
                        <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                        <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">Khatab wedaa</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default JobDetails;