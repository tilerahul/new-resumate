import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";

const TeamCard = ({ img, name, position, college, github, linkedin }) => {
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className=" flex flex-col items-center py-10">
                    <img className="w-[8rem] h-[8rem] my-3 rounded-full shadow-lg" src={img} alt={name} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{position}</span>
                    <p className="m-1 text-sm text-center text-gray-500 dark:text-gray-400">{college}</p>
                    <div className="flex mt-4 md:mt-6 gap-4">
                        <Link to={linkedin} className="hover:scale-125"><FaLinkedin/></Link>
                        <Link to={github} className="hover:scale-125"><FaGithub/></Link>
                        <Link to='/' className="hover:scale-125"><FaInstagram/></Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default TeamCard;