import { AiFillStar } from "react-icons/ai"
import Motion from "./Motion"

const About = () => {
    return (
        <Motion init={-40}>
            <div className="mt-28" id="about">
                <h2 className="text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#161923] to-[#8399c0] dark:from-[#8399c0] dark:to-[#161923]">
                    About me
                </h2>
                <div className="ml-3 sm:ml-4 mt-7 text-gray-800 dark:text-gray-400 dark:sm:text-gray-300 leading-10 sm:leading-[45px]">
                    <h3 className="flex gap-2 dark:text-white items-center text-3xl">
                        Hello World
                        <AiFillStar
                            style={{
                                zIndex: 0,
                                color: "#fffa6b",
                                transform: "rotate(79deg)",
                            }}
                        />
                    </h3>
                    <p className="about mt-2">
                        My name is Vlad and I'm a Information Technology student
                        from Russia. I've been programming for 3 years now,
                        and I'm currently spending time creating pet projects.
                        Besides programming, I'm really interested in gaming and
                        music.
                    </p>
                    <p className="about mt-7">
                        My main goal is to become a really good Software Engineer and
                        work in the top companies!
                    </p>
                </div>
            </div>
        </Motion>
    )
}

export default About
