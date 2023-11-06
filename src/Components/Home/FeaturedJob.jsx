import FeaturedSlider from "./FeaturedSlider";

const FeaturedJob = () => {
    return (
        <div className="mt-6">
            <h1 className=' my-6 text-4xl font-medium'>Featured Jobs</h1>
            <section>
                <FeaturedSlider></FeaturedSlider>
            </section>
            <div className=" w-full mt-14">
                <h1 className="text-2xl">Add will added there</h1>
            </div>
        </div>
    );
};

export default FeaturedJob;