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
                    <p className="max-w-md sm:max-w-3xl text-[22px] mt-2">
                        My name is Vlad and I'm a (beginner) Software Engineer
                        from Russia. I'm Open Source Lover and enjoy the idea of
                        explaining where and how you can use certain code. My
                        principles of development are YAGNI, KISS and SOLID.
                        Besides programming, I'm really interested in gaming and
                        music. (lofi, different types of phonk, future bass,
                        etc)
                    </p>
                    <p className="max-w-md sm:max-w-3xl text-[22px] mt-7">
                        My main goal is to become a really good programmer and
                        work in the top companies, making enough money to live
                        comfortably.
                    </p>
                </div>
            </div>
        </Motion>
    )
}

export default About
