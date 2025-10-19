import { CourseWorkList, StyledMain, StyledMainH1, StyledMainH2, StyledEduP } from "../styles";

export default function Edu() {
    return (
            <StyledMain>
                <title> Education | Resume</title>
                
                <StyledMainH1>Education</StyledMainH1>

                <StyledMainH2>Boston University - Bachelor of Science in Computer Science (2023 - 2026)</StyledMainH2>
                <StyledEduP>
                    Currently pursuing a Bachelor of Science in Computer Science at Boston University.
                    My coursework has covered fundamental topics including data structures, algorithms,
                    object-oriented programming, computer systems, and software engineering principles.
                    I have gained proficiency in multiple programming languages including Java, Python, C++, and JavaScript.
                </StyledEduP>
                <br/>

                <StyledEduP><strong>Relevant Coursework:</strong></StyledEduP>
                <CourseWorkList>
                    <li>Data Structures and Algorithms</li>
                    <li>Computer Systems</li>
                    <li>Concepts of Programming Languages</li>
                    <li>Web Application Development</li>
                    <li>Fundamentals of Computing Systems</li>
                </CourseWorkList>
                <br/>
                
                <br/>

                <StyledMainH2>University of Massachusetts Boston - Computer Engineering (2021 - 2023)</StyledMainH2>
                <StyledEduP>
                    Started my academic journey in Computer Engineering at UMass Boston before transferring to
                    Boston University to focus specifically on Computer Science. During this time, I built
                    a strong foundation in mathematics, physics, and basic programming concepts. The engineering
                    background has given me a unique perspective on how software and hardware interact.
                </StyledEduP>
                <br/>

                <StyledEduP><strong>Relevant Coursework:</strong></StyledEduP>
                <CourseWorkList>
                    <li>Introduction to Programming (C++)</li>
                    <li>Calculus I & II</li>
                    <li>Physics for Engineers</li>
                    <li>Digital Logic Design</li>
                    <li>Circuit Analysis</li>
                </CourseWorkList>
            </StyledMain>
    )
}