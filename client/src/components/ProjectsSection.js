import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
      title: "E-Commerce Page",
      description:
        "Simple E-Commerce page for adding items to cart using HTML, SCSS, and JavaScript.",
      getImageSrc: () => require("../images/e-commerce.png"),
      codeSrc: () => "https://github.com/ZubairLanre/ecommerce-product-page",
      demo: () => "https://frontend-commerce-product-page.netlify.app/",
    },
    {
      title: "JavaScript Quiz",
      description:
        "Intermediate JavaScript Quiz featuring random question selection, previews, timer, and more. Built with HTML, CSS, and JavaScript.",
      getImageSrc: () => require("../images/javascript-quiz.jpg"),
      codeSrc: () => "https://github.com/ZubairLanre/javascriptQuiz",
      demo: () => "https://africajsquiz.netlify.app/",
    },
    {
        title: "Random Fact Generator",
        description:
          "Generate random facts with HTML, CSS, and JavaScript.",
        getImageSrc: () => require("../images/fact-generator.jpg"),
        codeSrc: () => "https://github.com/ZubairLanre/randomNigeriaFactsGenerator",
        demo: () => "https://randomnigeriafactsgenerator.netlify.app/",
    },
    {
        title: "Campus Help-Desk",
        description:
            "Web app for students to submit campus-related requests. Administrators manage using HTML, Bootstrap, and Flask.",
        getImageSrc: () => require("../images/campus-helpdesk.jpg"),
        codeSrc: () => "https://github.com/ZubairLanre/project",
        demo: () => "https://youtu.be/JfdqHv_XJek",
    },
];


const ProjectsSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            backgroundColor="#c7d55e0"
            spacing={8}
            px={{base: "8", md: "24"}}
            py={16}
            
        >
            <Heading as="h1" id="projects" color="#141b3d"
                position="relative"
                _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    bottom: "0",
                    left: "0",
                    backgroundColor: "#9b59b6",
                }}
            >
                Featured Projects
            </Heading>

            <Box
                display="grid"
                gridTemplateColumns={{base: "1fr", md: "repeat(2,minmax(0,1fr))"}}
                gridGap={8}
            >
                {projects.map((project) => (
                    <Card 
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        codeSrc={project.codeSrc}
                        demo={project.demo}
                    />
                ))}
            </Box>
        </FullScreenSection>
    )
}

export default ProjectsSection;