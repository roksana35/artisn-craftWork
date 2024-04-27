import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="relative">
            <img className="lg:w-[824px] mx-auto mt-4 rounded-lg  lg:h-[500px] " src="https://i.ibb.co/kxCftvb/2548707-273801-P5-X298-594.jpg" alt="404"></img>
            <Link to='/'><button className="btn absolute top-2 left-1/4  bg-green-500 text-white z-10">Go Back Home</button></Link>
        </div>
    );
};

export default Errorpage;