// create react component
// rafce
//
import React from 'react'
import {motion} from 'framer-motion'
import {MdArrowForward} from 'react-icons/md'
import {FaAndroid} from 'react-icons/fa'

const GameCard = ({game, additionalClasses}) => {
    return (<div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[1px] m-4">
        <motion.div
            className={"relative flex flex-col items-center justify-center w-64 h-64 p-4 transition duration-500 ease-in-out transform rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl bg-base-300 border-accent" + (additionalClasses ? " " + additionalClasses : "")}
            whileHover={{scale: 1.1}}
        >
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center mt-2 mb-4">
                    <h2 className="text-2xl font-bold text-center text-cyan-600 pr-2">{game.name}</h2>
                    <p className="mt-1 ml-1">
                        <FaAndroid/>
                    </p>
                </div>
                <p className="text-center text-gray-500">{game.description}</p>
            </div>
        </motion.div>
    </div>)
}

export default GameCard
