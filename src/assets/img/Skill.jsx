import React from 'react'

import Blender from './blender.png'

const Skill = () => {
    return (
        <div className='grid lg:w-4/5 w-full  mx-auto '>
            <div className='flex flex-col justify-center items-center p-4'>
                <h2 className='text-2xl font-bold text-gray-900'>Skill</h2>
                <p>
                    Skilled in 3D animation, including modeling, texturing, and rigging, I
                    bring ideas to life using tools like Blender and Photoshop. With
                    expertise in storyboarding and video editing, I deliver captivating
                    visuals from concept to completion.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-2'>
                <div className="card card-compact bg-base-100 w-96 shadow-md shadow-orange-500 ">
                    <figure>
                        <img
                            src={Blender}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skill
