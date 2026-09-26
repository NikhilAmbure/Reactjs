import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

export default function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/NikhilAmbure')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <>
            <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
                Github Followers: {data.followers}
                <img className="" src={data.avatar_url} alt="Git Picture" width={300}/>
            </div>
        </>
    )
}


export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/NikhilAmbure')
    return response.json()
}