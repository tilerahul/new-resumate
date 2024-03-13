import TeamCard from "./TeamCard";
import rahulImg from '../../assets/rahultile.jpg'

const team = [
    {
        name : 'Rahul Tile',
        position : 'Founder Resumate',
        college : 'Dr. Vithalrao Vikhe Patil College Of Engineering, Ahmednagar',
        img : rahulImg,
        github : 'https://github.com/tilerahul',
        linkedin : 'https://www.linkedin.com/in/rahul-tile/'
    },
    {
        name : 'Om Patil',
        position : 'CO - Founder Resumate',
        college : 'Dr. Vithalrao Vikhe Patil College Of Engineering,  Ahmednagar',
        img : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
        github : 'https://github.com/om2438164',
        linkedin : 'https://www.linkedin.com/in/patil-om/'
    }
]

const Team = () =>{
    return (
        <div className="flex justify-center gap-9 flex-wrap ">
            {
                team.map((data, index)=>(
                    <div key={index}>
                        <TeamCard name={data.name} position={data.position} college={data.college} img={data.img} github={data.github} linkedin={data.linkedin} />
                    </div>
                ))
            }
        </div>
    );
}

export default Team;