import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,Link,Github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <a href={Link}>

          <h4>{title}</h4>
          </a>
          <span>{description}</span>
          <a className="GithubTag" href={Github}>
            Github
          </a>
        </div>
    
      </div>
    </Col>
  )
}
