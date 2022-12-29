import type { NextPage } from "next";
import Section from "components/mdx/Section";
import projects from "content/projects.json";
import ProjectCard from "components/ProjectCard";

import DearBluenoMedia from "public/media/dear-blueno.webp";
import PathtracerMedia from "public/media/pathtracer.webp";
import Paragraph from "components/mdx/Paragraph";
import { StaticImageData } from "next/image";

const projectMedia: (StaticImageData | string)[] = [
  DearBluenoMedia,
  "media/cloth-simulation.webm",
  PathtracerMedia,
  "media/simulation.webm",
];

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full sm:pt-32 py-16 px-8">
      <main className="flex flex-col max-w-3xl gap-12">
        <Section>
          <h2 className="text-2xl text-gray-700 dark:text-gray-100 -ml-0.5">
            My name is
          </h2>
          <h1 className="text-6xl font-bold text-gray-700 dark:text-gray-100 -ml-1">
            Dylan Hu
          </h1>
        </Section>
        <Section>
          <Paragraph>
            {
              "I'm currently a junior at Brown University studying computer science with a focus on computer graphics, computer vision, deep learning, and software engineering."
            }
          </Paragraph>
          <Paragraph>
            {
              "I am passionate about designing and building software for all kinds of communities and applications, as well as exploring the cutting-edge of research in visual computing."
            }
          </Paragraph>
          <Paragraph>
            {
              "In my free time, I enjoy competitive esports and learning Japanese ツ"
            }
          </Paragraph>
        </Section>
        <Section>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-100 -ml-0.5">
            Projects
          </h2>
          <div className="flex flex-wrap gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                media={projectMedia[index]}
                mediaType={project.mediaType}
                link={project.link}
              />
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Home;
