import { useEffect, useState } from "react"

export default function CardsPage(){
    const [data,setData] = useState([])

    const currentURL = window.location.href.split("/").slice(-1)
    
    useEffect(()=>{
        fetch(`http://localhost:4000/ders/${currentURL}`)
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="flex flex-col h-full justify-center ">
            {data.map((element, index) => 
                <div key={index}>
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                        <div className="bg-[#ff2b47] rounded-xl">
                            <div className="flex flex-col p-3 h-72 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                                <div className="flex flex-col h-full justify-center">
                                    <hr className="my-4 border border-black w-5/6 mx-auto" />
                                    <h3 className="text-3xl text-center font-barlow">{element.q}</h3>
                                    <hr className="my-4 border border-black w-5/6 mx-auto" />
                                </div>                           
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}