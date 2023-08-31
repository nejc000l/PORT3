import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import waves from "../assets/img/waves.png";
import amazon from "../assets/img/amazon.png";
import shopify from "../assets/img/eCommerce.png";
import twitter from "../assets/img/twitter.png";
import reddit from "../assets/img/reddit-2.png";
import aire from "../assets/img/airbnb.png";
import lpd from "../assets/img/lpd.png";
import disney from "../assets/img/disney.png";
import UnstableDeffsuion from "../assets/img/UnstableDeffsuion.png";
import html from "../assets/img/Html_Converter.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Waves music app",
      description: "A music player app create in React",
      imgUrl: waves,
      Link: "https://nejc000l.github.io/Waves-Player_final/",
      Github: "https://github.com/nejc000l/Waves-Player_final/tree/master",
    },
    {
      title: "Lovsko društvo Pugled",
      description:
        "A hunting club app create in React and NextJS and Supabase database",
      imgUrl: lpd,
      Link: "https://stag-2.vercel.app/",
      Github: "https://github.com/nejc000l/stag_2/tree/master",
    },
    {
      title: "  eCommerce shopify ",
      description: "Shopping app using Shopfy api with React and Next JS",
      imgUrl: shopify,
      Link: "https://shopify-demo-lyq2w95yg-nejc000l.vercel.app/#",
      Github: "https://github.com/nejc000l/Shopify-Demo-/tree/main",
    },
    {
      title: "AirBnb",
      description:
        "An AirBnb type landing page with map and geocordinate location build in React",
      imgUrl: aire,
      Link: "https://twiter-clone2-0.vercel.app/",
      Github: "https://github.com/nejc000l/Air_Clone",
    },

    {
      title: "Unstable Diffusion",
      description:
        "An open-source machine learning model that can generate images from text, build in CSS React",
      imgUrl: UnstableDeffsuion,
      Link: "https://stable-deffusion-generator.vercel.app/",
      Github: "https://github.com/nejc000l/stableDeffusionGenerator",
    },

    {
      title: "Amazon Clone",
      description: "A recreation of amazon webpage in React and Next Js",
      imgUrl: amazon,
      Link: "https://amazon-ten-zeta.vercel.app/",
      Github: "https://github.com/nejc000l/amazon",
    },
    {
      title: "Text to HTML Converter",
      description:
        "A html converter that converts text into Html build in React",
      imgUrl: html,
      Link: "https://text-to-html-converter.vercel.app/",
      Github: "https://github.com/nejc000l/Text-to-Html-Converter",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
