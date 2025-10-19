import { StyledMain, StyledMainH1, StyledH2, StyledMainP, StyledMainH2 } from "../styles";

export default function Ref() {
    return (
        <StyledMain>
            <title>References | Resume</title>
            
            <StyledMainH1>References</StyledMainH1>

            <StyledH2>Dr. Michael Chen</StyledH2>
            <ul>
                <li><strong>Title:</strong> Academic Advisor, Computer Science Department</li>
                <li><strong>Email:</strong> m.chen@bu.edu</li>
                <li><strong>Phone:</strong> (617) 555-0145</li>
                <li><strong>Relationship:</strong> Academic advisor and CS 391 instructor</li>
                <li><strong>Duration:</strong> Spring 2024 - Present</li>
            </ul>
            <StyledMainP>
                Dr. Chen serves as my academic advisor and has guided me through course planning 
                and career decisions. He can provide insights into my academic goals and progress.
            </StyledMainP>
            <br/>

            <StyledH2>Jennifer Thompson</StyledH2>
            <ul>
                <li><strong>Title:</strong> Learning Center Coordinator, Boston University</li>
                <li><strong>Email:</strong> j.thompson@bu.edu</li>
                <li><strong>Phone:</strong> (617) 555-0178</li>
                <li><strong>Relationship:</strong> Supervisor for tutoring position</li>
                <li><strong>Duration:</strong> September 2024 - Present</li>
            </ul>
            <StyledMainP>
                Jennifer supervises my work as a tutor and can speak to my communication skills, 
                reliability, and ability to help students understand complex concepts.
            </StyledMainP>
            <br/>

            <StyledH2>David Kim</StyledH2>
            <ul>
                <li><strong>Title:</strong> Program Coordinator, Steppingstone Foundation</li>
                <li><strong>Email:</strong> d.kim@steppingstonefoundation.org</li>
                <li><strong>Phone:</strong> (617) 555-0192</li>
                <li><strong>Relationship:</strong> Supervisor during TA position</li>
                <li><strong>Duration:</strong> Summer 2020 - 2021</li>
            </ul>
            <StyledMainP>
                David supervised my work as a teaching assistant and can provide feedback on my 
                work with middle school students, classroom management, and volunteer commitment.
            </StyledMainP>
            <br/>

            <StyledH2>Lisa Rodriguez</StyledH2>
            <ul>
                <li><strong>Title:</strong> Community Center Director</li>
                <li><strong>Email:</strong> l.rodriguez@communitycenter.org</li>
                <li><strong>Phone:</strong> (617) 555-0156</li>
                <li><strong>Relationship:</strong> Volunteer coordinator for IT support</li>
                <li><strong>Duration:</strong> January 2024 - May 2024</li>
            </ul>
            <StyledMainP>
                Lisa coordinated my volunteer work providing IT support and can speak to my 
                technical problem-solving abilities, patience with community members, and 
                commitment to helping others.
            </StyledMainP>
            <br/>

            <StyledH2>Reference Notes</StyledH2>
            <StyledMainP>
                All references have given permission to be contacted regarding academic performance, 
                work experience, and character assessment. They are available during standard business 
                hours (9 AM - 5 PM EST) and can provide detailed information about my skills, 
                work ethic, and potential for future success.
            </StyledMainP>
            <br/>
            <StyledMainP>
                Please feel free to contact any of these references for additional information 
                about my qualifications and character. Additional references available upon request.
            </StyledMainP>
        </StyledMain>
    )
}