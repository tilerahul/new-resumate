import TeamCard from "./TeamCard";
import rahulImg from '../../assets/Rahul_Tile.png'
import ShivImg from "../../assets/ShivImg.jpg"
import OmImg from "../../assets/OmImg.png"
const team = [
    {
        name : 'Rahul Tile',
        position : 'Founder Resumate',
        college : 'Dr. Vithalrao Vikhe Patil College Of Engineering, Ahmednagar',
        img : rahulImg,
        // img : "https://media.licdn.com/dms/image/v2/D4D35AQHnAy4dSY60Eg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1710211985665?e=1730649600&v=beta&t=bgoaltRNlqhX17rrJFEzHpMutxGE2sTv7JFeHOiM-ZU",
        github : 'https://github.com/tilerahul',
        linkedin : 'https://www.linkedin.com/in/rahul-tile/',
        insta : 'https://www.instagram.com/r_a_h_u_l_tile_/'
    },
    {
        name : 'Om Patil',
        position : 'Co-Founder Resumate',
        college : 'Dr. Vithalrao Vikhe Patil College Of Engineering,  Ahmednagar',
        img : OmImg,
        github : 'https://github.com/om2438164',
        linkedin : 'https://www.linkedin.com/in/patil-om/',
        insta : 'https://www.instagram.com/__patilom/'
    },
    {
        name : 'Shivkanya Kakade',
        position : 'Backend Developer',
        college : 'Backend Developer / UI Developer at Yash Technologies, Pune',
        img : ShivImg,
        // img : "https://media.licdn.com/dms/image/v2/D5635AQGrtTdNFlz6DA/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726679088248?e=1730649600&v=beta&t=kk4C9BEGlseqDRKknQ7XblGZdHxqF6H4nZJ1tRKDC8Y",
        github : 'https://github.com/shivkanyakakade',
        linkedin : 'https://www.linkedin.com/in/shivkanya-kakade-501a20229/',
        insta : 'https://www.instagram.com/'
    }
]

const Team = () =>{
    return (
        <div className="flex justify-center gap-9 flex-wrap ">
            {
                team.map((data, index)=>(
                    <div key={index}>
                        <TeamCard name={data.name} position={data.position} college={data.college} img={data.img} github={data.github} linkedin={data.linkedin} insta={data.insta} />
                    </div>
                ))
            }
        </div>
    );
}

export default Team;