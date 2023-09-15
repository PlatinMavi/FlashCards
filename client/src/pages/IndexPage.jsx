import { Link } from "react-router-dom"


export default function IndexPage(){
    return (
        <div className="flex flex-wrap gap-x-12 gap-y-8 container mx-auto justify-center">
            <Link to={"/matematik"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#19296d] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/3/3ea39d6571637db9dad4743f8933d3f3.jpg?st=xURf4aYsLiEobTolzkmeDA&e=1694816548&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Matematik</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/kimya"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#6d1919] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/4/458b01d32de7270555c47edaa3941e84.jpg?st=FccG6ygMfCKyLPuyndI5YQ&e=1694817267&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Kimya</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/fizik"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#ffd51c] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/f/ffe8c9828f10da8790a6102899464a92.jpg?st=8PMn6DuHsO5gAW0LDXdbYg&e=1694817304&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Fizik</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/biyoloji"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#2a6d19] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/c/c4c0d390787bcf21d87d3b45e531faf0.jpg?st=1bXLT_nOdrsizDFJtogYcQ&e=1694817350&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Biyoloji</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/felsefe"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#5c196d] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/a/ab8a0903996387e0915b8b657e76fa67.jpg?st=eFxMD3zcP-Zj6VB20dfWqQ&e=1694817418&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Felsefe</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/tarih"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#6d4619] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/8/859e22ab2dcef2323ad7a0178000c61e.jpg?st=rJGXPtX8sEDsWo5GsAJ9Pw&e=1694817437&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Tarih</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/edebiyat"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#ff2b2b] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/a/ae780765e15a4103a94b158157ff8463.jpg?st=o6ZkKJh77ySsiVhq8ekVaw&e=1694817478&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Edebiyat</h3>
                    </div>
                </div>
            </Link>

            <Link to={"/din"} className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div className="bg-[#ff672b] rounded-xl">
                    <div className="flex flex-col p-3 rounded-xl bg-[#EEEEEE] shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
                        <img className="h-32 rounded-xl" src="https://cdn2.eba.gov.tr/PROD_NODE_THUMBNAIL_REPOSITORY/e/e184d419953d2ebf08231aad32f5eb70.jpg?st=ZYoxu4d3k0ogFGkFbsANRw&e=1694817552&eec=UqxBT5Oop0M/0qq5AV/SVQP6qLuFOGvqOZmEwNUmnOc04oxAvQ8TApe9f7VXRDeDnZRhbqAfK2MPfD0z36zZ+w==" alt="" />
                        <hr className="mt-2 border border-black w-5/6 mx-auto" />
                        <h3 className="text-3xl text-center font-barlow">Din Kültürü</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}