import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faLinkedin, 
} from "@fortawesome/free-brands-svg-icons"; 

export const Footer = () => {
  const socials = [ 
    { 
      icon: faEnvelope, 
      url: "mailto: ywdchen@uwaterloo.ca", 
    }, 
    { 
      icon: faGithub, 
      url: "https://github.com/YWDCHEN", 
    }, 
    { 
      icon: faLinkedin, 
      url: "https://www.linkedin.com/in/ywdchen/", 
    }, 
   ]; 

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={socials[0].url}>
                <FontAwesomeIcon icon={socials[0].icon} size="2x" />
              </a>
              <a href={socials[1].url}>
                <FontAwesomeIcon icon={socials[1].icon} size="2x" />
              </a>
              <a href={socials[2].url}>
                <FontAwesomeIcon icon={socials[2].icon} size="2x" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
