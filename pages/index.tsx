import type { NextPage } from "next";
import Head from "next/head";
import About from "content/About.mdx";
import Section from "components/mdx/Section";
import projects from "content/projects.json";
import ProjectCard from "components/ProjectCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center w-full sm:pt-32 py-16 px-8">
      <Head>
        <title>Dylan Hu</title>
      </Head>

      <main className="flex flex-col max-w-3xl gap-16">
        <Section>
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 -ml-0.5">
            My name is
          </h2>
          <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 -ml-1">
            Dylan Hu
          </h1>
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 -ml-0.5">
            Projects
          </h2>
          <div className="flex flex-wrap gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
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
