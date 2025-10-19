import {StyledMain, StyledImg, StyledMainH1, StyledMainP} from "./../../components/styles";

export default function Home(){ 
    return (
    <StyledMain>
        <title> Home | Resume</title>

        <StyledMainH1>About Me</StyledMainH1>
        <StyledImg src="public/IMG_3230.jpg" alt="Picture of my cat" />
        <StyledMainP>
            Welcome to my page! Here you will find an overview of my background, including my experiences, education,
            achievements,
            and projects that showcase my growth as a Computer Science student at Boston University.
        </StyledMainP>
        <br />
        <StyledMainP>
            My name is Kenney and I am a Computer Science major at Boston University.
            I have a passion for learning new technologies and applying them to real-world problems.
            Beyond the classroom, I am always eager to collaborate with others, share ideas, and learn from different perspectives. 
            I value teamwork, adaptability, and creative problem-solving qualities that I carry into both my academic and personal life. 
            I believe that the best solutions often come from diverse teams working together, bringing different viewpoints and experiences to tackle challenges.
            My approach to learning is hands-on and project-based, as I find that building real applications helps solidify theoretical concepts. 
        </StyledMainP>
        <br />
        <StyledMainP>
            Outside of academics, I enjoy hiking, playing video games, and exploring new places.
            These activities help me maintain a healthy work-life balance and often inspire creative solutions
            to programming challenges. Hiking allows me to disconnect and think through complex problems,
            while gaming has actually enhanced my understanding of user experience design and interactive systems.
        </StyledMainP>
    </StyledMain>
    )
}