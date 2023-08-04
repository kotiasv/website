import Motion from "./Motion"
import { getPinnedRepos } from "@/lib/github"
import ProjectCard from "./ProjectCard"
import { ProjectProps } from "@/data/types"

const Projects = async () => {
    const repos: ProjectProps[] | [] = await getPinnedRepos()
    console.log("Projects:", repos)
    return (
        <Motion init={-50}>
            <div className="mt-28" id="projects">
                <h2 className="text-5xl h-16 sm:text-6xl text-transparent bg-clip-text bg-gradient-to-tr from-[#161923] to-[#8399c0] dark:from-[#8399c0] dark:to-[#161923]">
                    Projects
                </h2>
                <div className="columns-1 lg:columns-2 mt-9">
                    {repos &&
                        repos.map((project, index) => (
                            <ProjectCard
                                project={project}
                                index={index}
                                key={`project-${index}`}
                            />
                        ))}
                </div>
            </div>
        </Motion>
    )
}

export default Projects
