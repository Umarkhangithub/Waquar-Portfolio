import React from 'react'
import Skill from '../skills/Skill'

import Perfume1 from '../../assets/img/perfume1.png'
import Perfume2 from '../../assets/img/perfume2.png'
import Perfume3 from '../../assets/img/perfume3.jpg'
import CgiAdd1 from '../../assets/video/cgiAdd.mp4'
import Airpods from '../../assets/video/airpods.mp4'

const Project = () => {
    return (
        <div className='pt-20 pb-20'>

            <div className='grid w-4/5   mx-auto  '>
                <div className='flex flex-col justify-center items-center p-4'>
                    <h2 className='text-3xl font-bold mb-8 text-white'>Projects</h2>
                    <p className='text-white mx-auto'>
                        I am skilled in 3D animation, specializing in modeling, texturing, and rigging, using industry-standard tools like Blender and Photoshop. I bring concepts to life by creating detailed 3D assets and ensuring realistic rendering. With a strong understanding of storytelling, I excel in storyboarding to plan and visualize each scene effectively. My expertise extends to video editing, where I refine animations and ensure smooth transitions. From the initial idea to the final cut, I focus on delivering visually captivating and engaging content. My goal is to create immersive and high-quality animations that exceed expectations.
                    </p>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  gap-8 mt-5 p-2 '>

                    <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                        <figure className='p-1'>
                            <img
                            className='  rounded-t-xl shadow-sm'
                                src={Perfume1}
                                alt="US Arabian Perfume" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">USARABIAN Perfume</h2>
                            <p>
                            reated captivating CGI ads and product visualizations for Usarabian Ads
                            </p>


                        </div>
                    </div>
                    <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                        <figure className='p-1'>
                            <img
                            className='  rounded-t-xl shadow-sm'
                                src={Perfume3}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Perfume</h2>
                            <p>
                            Created captivating perfume ads with stunning visuals.
                            </p>


                        </div>
                    </div>
                    <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                        <figure className='p-1'>
                            <img className='  rounded-t-xl shadow-sm'
                                src={Perfume2}
                                alt="US Arabian Perfume" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">USARBIAN Perfume</h2>
                            <p>
                            reated captivating CGI ads and product visualizations for Usarabian Ads
                            </p>


                        </div>
                    </div>
                    <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                        <figure className='p-1'>
                            <video
                                src={CgiAdd1}
                                className="h-full w-full object-cover rounded-t-xl shadow-sm"
                                autoPlay
                                loop
                                muted
                                controls
                                alt="Maac CGI Add"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">MAAC CGI </h2>
                            <p>
                            Created CGI advertisements at MAAC,
                            </p>


                        </div>
                    </div>

                    <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                        <figure className='p-1'>
                            <img
                            className='  rounded-t-xl shadow-sm'
                                src=''
                                alt="Coming Soon" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Animation & Rigging</h2>
                            <p>
                                <span className='font-medium text-orange-500'>Character Rigging:</span> Setting up skeletons and controls for animating characters and objects efficiently.
                            </p>


                        </div>
                    </div>

                    <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                        <figure className='p-1'>
                        <video
                                src={Airpods}
                                className="h-full w-full object-cover rounded-t-xl shadow-sm"
                                autoPlay
                                loop
                                muted
                                controls
                                alt='Airpods Rigging'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">AIRPOSDS</h2>
                            <p>
                            Crafted a dynamic ad for Boat AirPods, 
                            </p>
                          


                        </div>
                    </div>



                </div>

            </div>

            <Skill />
        </div>
    )
}

export default Project
