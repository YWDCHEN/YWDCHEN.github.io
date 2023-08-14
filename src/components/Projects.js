import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WorkCard } from "./workCards";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import workImg1 from "../assets/img/work-img1.png";
import workImg2 from "../assets/img/work-img2.png";
import workImg3 from "../assets/img/work-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Instagram Clone",
      description: "Developed a clone of Instagram with Sign In and Out, timeline of posts, user profile and suggested users using React, JavaScript and Tailwind CSS ",
      imgUrl: projImg1,
    },
    {
      title: "Management Engineering Information Web",
      description: "Gathered all relevant information about Management Science and allow user to visualized future pathway which increase the efficiency of planning and study",
      imgUrl: projImg2,
    },
    {
      title: "Movie Explore",
      description: "Developed a movie exploration application with various features to enhance user experience and provide valuable information about films using React",
      imgUrl: projImg3,
    },
  ];

  const works = [
    {
      title: "Product Manager",
      company: "Nova",
      description: "Worked with multi-functional team to release the GTM product CTV (Connected TV) and raised Ads Impressions in an average of 40% compared to previous quarter which increase client corporation by 26%" ,
      imgUrl: workImg1,
    },
    {
      title:"Process Engineer",
      company:"Go Direct Supply Chain Solutions Inc",
      description:"Established a complete KPI (Key Performance Indicator) standard system which contribute to implementation of ISO Quality System and reduced company cost by 35%",
      imgUrl: workImg2,
    },
    {
      title:"Project Manager Assistant",
      company:"Sichuan Huadi Construction Engineering Co. Ltd.",
      description:"Implement PMIS (Project Management Information System) for project tracking and decision approval which raise the company’s efficiency by 24% and cost by 30%",
      imgUrl: workImg3,
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Work Experiences </h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experiences</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          works.map((work, index) => {
                            return (
                              <WorkCard
                                key={index}
                                {...work}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
