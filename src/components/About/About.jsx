
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef } from "react";


import { useSpring, animated } from "@react-spring/web";

import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

import waquar from '../../assets/img/waquar.png'


const About = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

   

    const slideIn = useSpring({
        from: { opacity: 0, transform: 'translateX(100%)' }, // Start from right outside
        to: { opacity: 1, transform: 'translateX(0%)' },     // Move to original position
        delay: 400,
        config: { tension: 150, friction: 20 },   // Smooth and bouncy effect
    });
    const slideInEducation = useSpring({
        from: { opacity: 0, transform: 'translateX(100%)' }, // Start from right outside
        to: { opacity: 1, transform: 'translateX(0%)' },     // Move to original position
        delay: 1300,
        config: { tension: 150, friction: 20 },   // Smooth and bouncy effect
    });

    const hoverAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(1)', rotate: 0 },
        to: { opacity: 1, transform: 'scale(1.2)', rotate: 10 },
        delay: 1000,
        config: { tension: 170, friction: 26 },
    });

    useEffect(() => {
        const tl = gsap.timeline();


        tl.fromTo(
            containerRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        )
            .fromTo(
                imageRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1"
            );

    }, []);

    const lines = [
        " I specialize in creating CGI ads and product visualizations, bringing ideas to life with high-quality, photorealistic visuals. Using advanced 3D modeling, texturing, and rendering techniques, I deliver compelling content for marketing and branding. My work showcases creativity and precision to elevate your product's presentation. Let's create impactful visuals that captivate your audience.",
    ];
   
    const springs = lines.map((_, index) =>
        useSpring({
            from: { opacity: 0, transform: "translateY(100px)", },
            to: { opacity: 1, transform: "translateY(0px)" },
            delay: 800 + index * 500, // Sequential delay for each line
            config: { tension: 170, friction: 26 }, // Adjust for smoothness
        })
    );
    const education = [
        ` I hold a Diploma in Animation from MAAC Animation Institute, Noida,
                        where I developed my expertise in 3D animation. Additionally, I have a
                        Bachelor's degree in Computer Applications from Veer Bahadur Singh
                        Purvanchal University, Uttar Pradesh."`,
    ];

    const Education = education.map((_, index) =>
        useSpring({
            from: { opacity: 0, transform: "translateY(100px)", },
            to: { opacity: 1, transform: "translateY(0px)" },
            delay: 1500 + index * 500, // Sequential delay for each line
            config: { tension: 170, friction: 26 }, // Adjust for smoothness
        })
    );

    return (
        // <div className='bg-green-500 max-w-[1200px] '>

        <div className=" lg:w-4/5 grid h-auto w-full grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 mx-auto sm:pt-20 sm:w-full pb-10">

            <div className=" bg-base-300 lg:col-span-2  grid h-full flex-grow place-items-center bg-transparent lg:pl-28 p10 ">
                <aside className="card-body">
                   
                    <h1 className='text-xl text-white font-bold font-sans'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            `About Us`,
                            300,
                        ]}
                        speed={20}
                        style={{ fontSize: '2em' }}
                        repeat={1}
                    />
                    </h1>
                    <animated.h2 className="text-2xl text-white font-bold font-sans" style={slideIn}>
                        I'm 3D Animator, <span className="text-orange-500">Blender</span>
                    </animated.h2>

                    {/* <p className='text-white'>
                        I specialize in creating CGI ads and product visualizations, bringing ideas to life with high-quality, photorealistic visuals. Using advanced 3D modeling, texturing, and rendering techniques, I deliver compelling content for marketing and branding. My work showcases creativity and precision to elevate your product's presentation. Let's create impactful visuals that captivate your audience.
                    </p> */}
                      <div className="text-white text-lg leading-relaxed">
                        {lines.map((line, index) => (
                            <animated.p key={index} style={springs[index]}>
                                {line}
                            </animated.p>
                        ))}
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <animated.div style={hoverAnimation}>
                            <Link to="" className="text-white text-2xl">
                                <i
                                    className="fab fa-linkedin-in bg-white text-black p-2 rounded hover:bg-orange-500 duration-500"
                                    title="LinkedIn"
                                ></i>
                            </Link>
                        </animated.div>

                        <animated.div style={hoverAnimation}>
                            <Link to="" className="text-white text-2xl">
                                <i
                                    className="fab fa-instagram bg-white text-black p-2 rounded hover:bg-orange-500 duration-500"
                                    title="Instagram"
                                ></i>
                            </Link>
                        </animated.div>

                        <animated.div style={hoverAnimation}>
                            <Link to="" className="text-white text-2xl">
                                <i
                                    className="fab fa-twitter bg-white text-black p-2 rounded hover:bg-orange-500 duration-500"
                                    title="Twitter"
                                ></i>
                            </Link>
                        </animated.div>

                        <animated.div style={hoverAnimation}>
                            <Link to="" className="text-white text-2xl">
                                <i
                                    className="fab fa-youtube bg-white text-black p-2 rounded hover:bg-orange-500 duration-500"
                                    title="YouTube"
                                ></i>
                            </Link>
                        </animated.div>
                    </div>

                    <h3 className='text-2xl text-orange-500 font-bold font-sans mt-7'>
                        <span> <animated.h2 className="text-2xl text-white font-bold font-sans" style={slideInEducation}>
                        <span className="text-orange-500">Education</span>
                    </animated.h2></span>
                    </h3>

                    <div className="text-white text-lg leading-relaxed">
                        {education.map((education, index) => (
                            <animated.p key={index}  style={Education[index]}>
                                {education}
                            </animated.p>
                        ))}
                    </div>


                </aside>
            </div>
            <div className="  bg-base-300  grid h-[100vh] flex-grow place-items-center bg-transparent">
                <div ref={containerRef}
                    className="imageContainer rounded-full   w-96 shadow-xl overflow-clip ">
                    <figure className=''>
                        <img ref={imageRef}
                            className='shadow-2xl'
                            src={waquar}
                            alt="" />
                    </figure>

                </div>
            </div>
        </div>
        // </div>

    )
}

export default About
