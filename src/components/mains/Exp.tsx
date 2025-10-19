import {StyledMain, StyledMainH1, StyledH2, ExpList} from "./../../components/styles";

export default function Exp() {
    return (
         <StyledMain>
            <title>Work Experience | Resume</title>

            <StyledMainH1>Work Experience</StyledMainH1>

            <StyledH2>Tutor - Boston University Learning Center (September 2024 - Present)</StyledH2>
            <ExpList>
                <li>Provide tutoring services for introductory computer science and mathematics courses</li>
                <li>Help students understand programming concepts in Java and Python</li>
                <li>Debug code issues and work through problem-solving techniques</li>
                <li>Adapt teaching style to different learning approaches</li>
                <li>Work with approximately 15-20 students per week in both individual and group settings</li>
            </ExpList>
            <br/>

            <StyledH2>Steppingstone Foundation - TA (June 2020 - September 2020)</StyledH2>
            <ExpList>
                <li>Served as teaching assistant for middle school students in summer academic program</li>
                <li>Assisted with mathematics and basic computer literacy courses</li>
                <li>Helped students from underserved communities develop foundational academic skills</li>
                <li>Worked closely with lead teachers to create engaging activities</li>
                <li>Provided individualized support and developed patience and adaptability skills</li>
            </ExpList>
            <br/>
        </StyledMain>
    )
}