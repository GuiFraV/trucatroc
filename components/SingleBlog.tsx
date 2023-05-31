'use client'

import Image from "next/image";
import { SafeListing, SafeUser } from "@/types/type"
import axios from "axios";
import { useRouter } from 'next/navigation'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {BsFillPencilFill} from 'react-icons/bs'

interface BlogProps {
    key:string
    data:SafeListing
    currentUser?:SafeUser | null
}


export default function SingleBlog({key,data,currentUser}:BlogProps) {

    const router = useRouter();

    const onLike = () => {
        axios.post(`/api/like/${data.id}`)
        .then(() => {
          router.refresh()
        })
        .catch((error) => {
        })
        .finally(() => {
        })
    }

    const onDelete = () => {

        axios.delete(`/api/blogs/${data.id}`)
        .then(() => {
          router.refresh()
        })
        .catch((error) => {
        })
        .finally(() => {
        })
      }
    
    

  return (
    <div className="w-[1100px] border-2 p-4">
        <div className="">
            <div className="flex gap-2 justify-between items-center">
                <Image width={400} className="w-[500px] object-contain" height={300} src={data.imageSrc} alt="Blog Image" />

                <div className="w-[530px] flex flex-col gap-4 leading-[1.5]">
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                </div>
            </div>
        </div>

        {data.userId === currentUser?.id && (
            <div className="flex items-center gap-4 mt-4">
          <RiDeleteBin5Line onClick={onDelete} className=" cursor-pointer text-[1.5rem]"/>
          <BsFillPencilFill onClick={() => router.push(`/blogs/${data.id}`)} className=" cursor-pointer text-[1.2rem]"/>
          {/* <button className="bg-red-400 px-6 py-2" onClick={onDelete}>Delete</button> */}
          {/* <button className="bg-yellow-400 px-6 py-2" onClick={() => router.push(`/blogs/${data.id}`)}>Edit</button> */}
          </div>
        )}

        <div className="max-w-sm bg-white rounded-[40px] shadow dark:bg-gray-800 ">
            <a href="#">
                <Image width={400} className="w-[500px] rounded-t-[40px] object-contain" height={300} src={data.imageSrc} alt="Blog Image" />
                {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
            </a>
            <div className="p-5 bg-[#DFDFDF8A] rounded-b-[40px]">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{data.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-black ">{data.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Troc moi !
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
  )
}
