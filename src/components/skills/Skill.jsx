import React from 'react'

import Blender from '../../assets/img/blender.png'
import Photoshop from '../../assets/img/photoshop.png'
import VideoEditing from '../../assets/img/videoediting.png'

const Skill = () => {
    return (
        <div className='grid w-4/5   mx-auto  '>
            <div className='flex flex-col justify-center items-center p-4'>
                <h2 className='text-3xl font-bold mb-8 text-white'>Skill</h2>
                <p className='text-white mx-auto'>
                I am skilled in 3D animation, specializing in modeling, texturing, and rigging, using industry-standard tools like Blender and Photoshop. I bring concepts to life by creating detailed 3D assets and ensuring realistic rendering. With a strong understanding of storytelling, I excel in storyboarding to plan and visualize each scene effectively. My expertise extends to video editing, where I refine animations and ensure smooth transitions. From the initial idea to the final cut, I focus on delivering visually captivating and engaging content. My goal is to create immersive and high-quality animations that exceed expectations.
                </p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2  gap-8 mt-5 p-2 '>
                <div className="  card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200">
                    <div className="card-body">
                        <h2 className="card-title">3D Modeling</h2>
                        <p >
                        <span className='font-medium text-orange-500'>Conceptualization & Design: </span>Transforming ideas into detailed 3D models using Blender’s modeling tools.
                        </p>
                        <p>
                        <span className='font-medium text-orange-500'>Character & Environment Design:</span> Crafting realistic characters, objects, and environments for various applications like gaming or product visualization.
                        </p>
                        <p>
                        <span className='font-medium text-orange-500'>Asset Creation:</span> Building modular assets for seamless integration into projects, ensuring flexibility and reusability.
                        </p>
                      
                    </div>
                </div>
               
                <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200  ">
                  
                    <div className="card-body">
                        <h2 className="card-title">Texturing & Shading</h2>
                        <p>
                        <span className='font-medium text-orange-500'>UV Mapping:</span> Applying textures to 3D models with precise UV unwrapping techniques.
                        </p>
                        <p>  <span className='font-medium text-orange-500'>Material Creation:</span> Designing complex materials and textures using Blender’s node-based shader editor to achieve realistic effects.</p>
                        <p>  <span className='font-medium text-orange-500'>Surface Detailing:</span> Adding fine details, such as scratches or imperfections, to create lifelike 3D surfaces.</p>
                       
                    </div>
                </div>
               <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                    <div className="card-body">
                        <h2 className="card-title">Lighting & Rendering</h2>
                        <p>
                        <span className='font-medium text-orange-500'>Lighting Setup:</span> Understanding lighting principles to enhance the scene’s mood and clarity, using techniques like three-point lighting.
                        </p>
                        <p> <span className='font-medium text-orange-500'>Photorealistic Rendering:</span> Creating high-quality renders with Blender’s Cycles and Eevee render engines, ensuring vibrant and accurate output.</p>
                        <p> <span className='font-medium text-orange-500'>Post-Processing:</span> Enhancing final images and renders with color correction and compositing to create polished visuals.</p>
                       
                    </div>
                </div>
               <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black hover:scale-105 duration-200 ">
                    <div className="card-body">
                        <h2 className="card-title">Animation & Rigging</h2>
                        <p>
                        <span className='font-medium text-orange-500'>Character Rigging:</span> Setting up skeletons and controls for animating characters and objects efficiently.
                        </p>
                        <p><span className='font-medium text-orange-500'>Animation:</span> Bringing models to life by creating fluid animations, from basic movements to complex actions.</p>
                        <p><span className='font-medium text-orange-500'>Motion Graphics:</span> Designing dynamic animations for visual storytelling and interactive applications.</p>
                       
                    </div>
                </div>
               <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black  hover:scale-105 duration-200 ">
                    <div className="card-body">
                        <h2 className="card-title">3D Asset Integration</h2>
                        <p>
                        <span className='font-medium text-orange-500'>Game Assets:</span>Preparing optimized 3D assets for game engines (like Unity or Unreal Engine) to ensure smooth integration.
                        </p>
                        <p><span className='font-medium text-orange-500'>Web & Interactive Applications: </span> Creating interactive 3D models for websites, ensuring compatibility and smooth user experiences.</p>
                        <p><span className='font-medium text-orange-500'>Virtual Reality (VR) & Augmented Reality (AR): </span> Designing assets tailored for VR/AR applications to enhance immersive experiences.</p>
                       
                    </div>
                </div>
               <div className="card  bg-transparent backdrop-blur-sm bg-opacity-85 shadow-sm bg-white text-black  hover:scale-105 duration-200 ">
                    <div className="card-body">
                        <h2 className="card-title">Motion Graphics & Visual Effects (VFX)</h2>
                        <p>
                        <span className='font-medium text-orange-500'>Dynamic Motion Design: </span>Creating eye-catching animations and transitions for logos, titles, and scenes using Blender’s animation tools.
                        </p>
                        <p><span className='font-medium text-orange-500'>Special Effects (VFX):</span> Adding realistic visual effects, such as smoke, fire, and explosions, to enhance the visual appeal of a project.</p>
                        <p> <span className='font-medium text-orange-500'>Compositing & Integration:</span> Using Blender’s powerful compositing tools to integrate 3D animations into live-action footage seamlessly, creating professional-level VFX shots.</p>
                       
                    </div>
                </div>
               
               
            </div>

        </div>
    )
}

export default Skill
