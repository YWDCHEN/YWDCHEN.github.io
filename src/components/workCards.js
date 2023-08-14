import { Col } from "react-bootstrap";

export const WorkCard = ({ title, company,companyURL, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5><a href={companyURL}> {company} </a> </h5>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
