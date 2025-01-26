import { React, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Bg1 from '../../assets/images/tokyo.jpeg'
import Bg2 from '../../assets/images/london.jpg'
import Bg3 from '../../assets/images/paris.jpg'
import Bg4 from '../../assets/images/newyork.jpg'
import "./style.scss";


const ScaleUI = () => {
    const { scrollYProgress } = useScroll()
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            id: 0,
            title: "Tokyo",
            content: "Tokyo, the bustling capital of Japan, is a city that seamlessly blends tradition and modernity. Explore ancient temples, neon-lit streets, and enjoy world-class sushi.",
            image: Bg1,
            detailed: true,
        },
        {
            id: 1,
            title: "London",
            content: "London, the heart of the United Kingdom, is a city rich in history and culture. Visit iconic landmarks like Big Ben, the Tower of London, and Buckingham Palace.",
            image: Bg2,
            detailed: true,
        },
        {
            id: 2,
            title: "Paris",
            content: "Paris, the City of Light, is a global hub for art, fashion, and gastronomy. Discover the Eiffel Tower, the Louvre, and charming streets filled with cafés and boutiques.",
            image: Bg3,
            detailed: true,
        },
        {
            id: 3,
            title: "New York",
            content: "New York City, the city that never sleeps, offers an unmatched energy. Explore Times Square, Central Park, and the Statue of Liberty in this global metropolis.",
            image: Bg4,
            detailed: true,
        },
    ];


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setActiveIndex(Math.round(latest * 4))
        console.log(Math.round(latest * 4))
    })
    return (
        <div className="ups-container-outer">
            <div
            className="usp-container"
            style={{
                position:
                scrollYProgress.current > 0 && scrollYProgress.current < 4
                    ? "sticky"
                    : "relative",
                top: scrollYProgress.current > 0 && scrollYProgress.current < 4 ? "0" : "",
                }}
            >
                <h1 className="usp-header">Wonders of our world</h1>
                <div className="usp-columns">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            className={`usp-column ${activeIndex > index && index < 4 ? "active" : ""}`}
                            initial={{ width: "10%" }}
                            animate={{
                                minWidth: activeIndex > index && index < 4 ? "60px" : '60vw',
                            }}
                            >
                            <motion.div
                                className="usp-content"
                            >
                                <h2 className={activeIndex === index ? "active" : ""}>{section.title}</h2>
                                <hr className="heading-line"/>
                                <div className="checkbox">{activeIndex > index? <FaCheck />: index + 1}</div>
                                {section.detailed ? (
                                    <motion.div
                                    className="content-outer"
                                    style={{ backgroundImage: `url(${section.image})` }}
                                    >
                                        <div className="overlay"></div>
                                        <div className="para">{section.content}</div>
                                        <div className="usp-image">
                                            <button className="visit-button">Visit Now</button></div>
                                    </motion.div>
                                ) : null}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ScaleUI;
