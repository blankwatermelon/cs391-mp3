import {
  StyledH2,
  ExpList,
  StyledMainH1,
  StyledMain,
  StyledH3,
} from "./../../components/styles";

export default function Achieve() {
  return (
    <StyledMain>
      <title>Achievements | Resume</title>

      <StyledMainH1>Achievements & Skills</StyledMainH1>

      <StyledH2>Academic Achievements</StyledH2>
      <ExpList>
        <li>Dean's List - Boston University (Fall 2024)</li>
        <li>Academic Merit Scholarship - Boston University (2023-2026)</li>
        <li>
          Successful Transfer Student - Maintained 3.5+ GPA during transition
        </li>
        <li>Honor Roll - Multiple semesters at previous institution</li>
      </ExpList>
      <br />

      <StyledH2>Technical Skills</StyledH2>
      <StyledH3>Programming Languages</StyledH3>
      <ExpList>
        <li>Java - Intermediate (CS coursework and personal projects)</li>
        <li>
          Python - Basic to Intermediate (data structures, simple scripts)
        </li>
        <li>HTML/CSS - Intermediate (web development, responsive design)</li>
        <li>JavaScript - Basic (DOM manipulation, this assignment!)</li>
        <li>C++ - Basic (introductory programming experience)</li>
      </ExpList>
      <br />

      <StyledH3>Tools & Technologies</StyledH3>
      <ExpList>
        <li>Git/GitHub - Version control for coursework and projects</li>
        <li>VS Code - Primary development environment</li>
        <li>Linux/Terminal - Basic command line operations</li>
        <li>Microsoft Office Suite - Word, Excel, PowerPoint</li>
        <li>Google Workspace - Collaboration and productivity tools</li>
      </ExpList>
      <br />

      <StyledH2>Soft Skills & Interests</StyledH2>
      <ExpList>
        <li>Problem-solving and analytical thinking</li>
        <li>Clear communication and teaching ability</li>
        <li>Team collaboration and group project experience</li>
        <li>Time management and organizational skills</li>
        <li>Photography and outdoor activities (hiking, exploring)</li>
        <li>Gaming and technology enthusiasm</li>
      </ExpList>
    </StyledMain>
  );
}
