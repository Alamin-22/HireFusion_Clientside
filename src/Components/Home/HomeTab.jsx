import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import All from '../JobsByCategory/All';
import OnSiteJobs from '../JobsByCategory/OnSiteJobs';
import RemoteJobs from '../JobsByCategory/RemoteJobs';
import PartTimeJobs from '../JobsByCategory/PartTimeJobs';

const HomeTab = () => {
    return (
        <div>
            <h1 className="text-center text-2xl my-4 font-medium font-mono un">Popular Categories</h1>
            <Tabs >
                <TabList className={"text-center"}>
                    <Tab>All</Tab>
                    <Tab>On Site Job</Tab>
                    <Tab>Remote Job</Tab>
                    <Tab>Part Time Job</Tab>
                </TabList>

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
            </Tabs>
        </div>
    );
};

export default HomeTab;