import React, { useState, useEffect } from 'react'

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, SetTerm] = useState('')
    return (
    <>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img src="https://source.unsplash.com/random" alt="" className='w-full'/>
            <div className="px-6 py-4 ">
            <div className="font-bold text-purple-500 text-xl mb-2">
                Photo by John Doe
            </div>
            <ul>
                <li>
                    <strong>Views: 300</strong>
                </li>
                <li>
                    <strong>Downloads: 2400</strong>
                </li>
                <li>
                    <strong>Likes: 7000</strong>
                </li>
            </ul>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag1
            </span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag2
            </span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #Tag3
            </span>
        </div>
        </div>
        
    </>
  )
}

export default App