import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from 'react-router-dom'

import {TypeAnimation} from 'react-type-animation';
import { gsap } from 'gsap'

import waquar from '../../assets/img/waquar.png';

import './Home.scss'


const Home = () => {

    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const slideIn = useSpring({
        from: { opacity: 0, transform: 'translateX(-100%)' }, // Start from right outside
        to: { opacity: 1, transform: 'translateX(0%)' },     // Move to original position
        delay: 500,
        config: { tension: 150, friction: 20 },   // Smooth and bouncy effect
    });


    const hoverAnimation = useSpring({
        from: { opacity: 0, transform: 'scale(1)', rotate: 0 },
        to: { opacity: 1, transform: 'scale(1.2)', rotate: 10 },
        delay: 1300,
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
        "I'm Waquar Ahmad, a 3D Animator skilled in modeling, texturing, and animation.I bring stories to life through immersive visuals using tools like Blender and Photoshop.Explore my work and let's create something amazing together!",
    ];

    const springs = lines.map((_, index) =>
        useSpring({
            from: { opacity: 0, transform: "translateY(100px)", },
            to: { opacity: 1, transform: "translateY(0px)" },
            delay: 1000 + index * 500, // Sequential delay for each line
            config: { tension: 170, friction: 26 }, // Adjust for smoothness
        })
    );

    return (
        // <div className=	''>
        <div className=" lg:w-4/5 grid w-full grid-cols-1 lg:grid-cols-2 mx-auto pb-10 ">
            <div className=" bg-base-300  grid h-[100vh] flex-grow place-items-center bg-transparent">
                <div ref={containerRef}
                    className="imageContainer rounded-full  w-96 shadow-xl overflow-clip ">
                    <figure className=''>
                        <img ref={imageRef}
                            className='shadow-2xl'
                            src={waquar}
                            alt="" />
                    </figure>

                </div>
            </div>
            <div className=" bg-base-300  grid  h-full flex-grow place-items-center bg-transparent">
                <aside className="card-body">
                   
                    <h1  className='text-xl text-white font-bold font-sans'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            ` Hello, I'm Waquar Ahmad`,
                            300,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={1}
                    />
                    </h1>
                   
                    <animated.h2 className="text-2xl text-white font-bold font-sans" style={slideIn}>
                        I'm 3D Animator, <span className="text-orange-500">Blender</span>
                    </animated.h2>

                    {/* <p className='text-white'>
                        I'm Waquar Ahmad, a 3D Animator skilled in modeling, texturing, and
                        animation. I bring stories to life through immersive visuals using
                        tools like Blender and Photoshop. Explore my work and let's create
                        something amazing together!

                    </p> */}
                    <div className="text-white text-lg leading-relaxed">
                        {lines.map((line, index) => (
                            <animated.p key={index} style={springs[index]}>
                                {line}
                            </animated.p>
                        ))}
                    </div>
                    {/* <div className="flex space-x-4">
                        <Link to='' className="text-white text-2xl ">
                            <i className="fab fa-linkedin-in bg-white text-black p-2 rounded  hover:bg-orange-500 duration-500" title='Linkedin'></i>
                        </Link>
                        <Link to='' className="text-white text-2xl">
                            <i className="fab fa-instagram bg-white text-black p-2 rounded
                            hover:bg-orange-500 duration-500 " title='Instagram'></i>
                        </Link>
                        <Link to='' className="text-white text-2xl">
                            <i className="fab fa-twitter bg-white text-black p-2 rounded hover:bg-orange-500 duration-500" title='Twitter'></i>
                        </Link>
                        <Link to='' className="text-white text-2xl">
                            <i className="fab fa-youtube bg-white text-black p-2 rounded hover:bg-orange-500 duration-500" title='Youtube'></i>
                        </Link>
                    </div> */}

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


                </aside>
            </div>
        </div>

        // </div>

    )
}

export default Home
