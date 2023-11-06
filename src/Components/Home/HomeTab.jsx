import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import All from '../JobsByCategory/All';
import OnSiteJobs from '../JobsByCategory/OnSiteJobs';
import RemoteJobs from '../JobsByCategory/RemoteJobs';
import PartTimeJobs from '../JobsByCategory/PartTimeJobs';
import FeaturedJob from './FeaturedJob';
import { Link } from 'react-router-dom';

const HomeTab = () => {
    return (
        <div>
            <h1 className="text-center ml-28 text-2xl my-4 font-medium font-mono ">Popular Categories</h1>
            <Tabs >
                <TabList className={"text-center"}>
                    <Tab>All</Tab>
                    <Tab>On Site Job</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Part Time Job</Tab>
                </TabList>
                <div className=' md:grid md:grid-cols-5 gap-6 mx-5'>
                    <div className='col-span-3'>
                        <div className='max-w-3xl'>
                            <h1 className=' my-6 text-4xl font-medium'>Recent Jobs</h1>
                            <TabPanel>
                                <All></All>
                            </TabPanel>
                            <TabPanel>
                                <OnSiteJobs></OnSiteJobs>
                            </TabPanel>
                            <TabPanel>
                                <RemoteJobs></RemoteJobs>
                            </TabPanel>
                            <TabPanel>
                                <PartTimeJobs></PartTimeJobs>
                            </TabPanel>
                            <div className='text-center'>
                                <Link to={"/all_jobs"}><button className='btn btn-primary my-6 '>Explore All Jobs</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <FeaturedJob></FeaturedJob>
                    </div>
                </div>

            </Tabs>
        </div>
    );
};

export default HomeTab;