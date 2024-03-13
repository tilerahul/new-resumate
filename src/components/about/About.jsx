import Team from "./Team";
import Title from "./Title"
import aboutSVG from '../../assets/about.svg';
import storySVG from '../../assets/story.svg';
import offerSVG from '../../assets/offer.svg';
import chooseSVG from '../../assets/choose.svg';

const About = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-10/12 pt-15">
                <div className="flex flex-col items-center">
                    <Title title='About Us' />
                    <div className="flex items-center gap-16 justify-center flex-wrap-reverse">
                        <div className="w-2/5">
                            Welcome to <span className="font-semibold">Resumate</span>! We are passionate about empowering individuals to craft compelling resumes that highlight their unique skills and experiences. Our mission is to provide user-friendly tools and resources to help you land your dream job.
                        </div>
                        <div className="w-1/4">
                            <img src={aboutSVG} alt="aboutsvg" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <Title title='Our Story' />
                    <div className="flex items-center gap-16 justify-center flex-wrap">
                        <div className="w-1/6 m-4">
                            <img src={storySVG} alt="storySVG" />
                        </div>
                        <div className="text-right  w-2/5">
                            <span className="font-semibold">Resumate</span> was born out of a shared vision between <span className="font-semibold">Rahul Tile</span> and <span className="font-semibold">Om Patil</span>. we envision revolutionizing resume creation by providing intuitive tools and guidance to empower every job seeker. Our goal is to simplify the process, set a new standard for professionalism, and help individuals unlock their full career potential, we recognized the need for a streamlined and effective solution for creating professional resumes.
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <Title title='What we offer' />
                    <div className="flex items-center gap-16 justify-center flex-wrap-reverse">
                        <div className="text-left w-2/5">
                            At <span className="font-semibold">Resumate</span>, we offer a comprehensive resume-building platform designed to simplify the process of crafting polished resumes. Our intuitive tools and customizable templates make it easy for users to create standout resumes tailored to their individual strengths and career goals.
                        </div>
                        <div className="w-1/4 m-4">
                            <img src={offerSVG} alt="offerSVG" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Title title='why choose us' />
                    <div className="flex items-center gap-16 justify-center flex-wrap">
                        <div className="w-1/5 m-4">
                            <img src={chooseSVG} alt="" />
                        </div>
                    <div className="w-2/5">
                        <li>Our platform is designed with simplicity in mind, making it accessible to users of all skill levels.</li>
                        <li>We offer a variety of templates and formatting options to suit your preferences and industry standards.</li>
                        <li>From resume writing tips to career advice, we provide valuable resources to support you at every stage of your job search journey.</li>
                        <li>Have questions or need assistance? Our dedicated support team is here to help you succeed.</li>
                    </div>
                    </div>
                </div>
                <Title title='The Creative Minds Behind Resumate' />
                <Team />
            </div>
        </div>
    );
}

export default About;