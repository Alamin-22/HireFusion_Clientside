import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const AllJobPageCard = ({ job }) => {
    const { _id, JobTitle, Category, ApplicationStartDate, ApplicationEndDate, Salary, JobApplicantsNumber, JobBanner, LoggedInUser } = job;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure>
                    <img src={JobBanner} alt="Job Related pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {JobTitle}
                        <div className="badge badge-accent">{Category}</div>
                    </h2>
                    <p className='text-lg'>Salary: <span>{Salary}</span></p>
                    <p className='text-lg'>Applied: <span>{JobApplicantsNumber}</span></p>
                    <p className='text-lg'>Application Start: <span>{ApplicationStartDate}</span></p>
                    <p className='text-lg'>Application End: <span>{ApplicationEndDate}</span></p>
                    
                    <div className="card-actions justify-between">
                        <Link to={`/jobDetails/${_id}`} className="btn btn-primary btn-sm">Details</Link>
                        <div >Posted By: {LoggedInUser}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllJobPageCard.propTypes = {
    job: PropTypes.object.isRequired,
};
export default AllJobPageCard;

