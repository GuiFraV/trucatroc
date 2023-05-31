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
    console.log(data.createdAt);

    // const onLike = () => {
    //     axios.post(`/api/like/${data.id}`)
    //     .then(() => {
    //       router.refresh()
    //     })
    //     .catch((error) => {
    //     })
    //     .finally(() => {
    //     })
    // }

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
    <div className="border-2 p-4">

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image width={400} className="w-[500px] rounded-t-[40px] h-[300px]" height={300} src={data.imageSrc} alt="Product Image" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.name}</div>
              <p className="text-gray-700 text-base">
              {data.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 mb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              <p>Posté il y a <span>{data.createdAt}</span></p>
              {data.userId === currentUser?.id && (
                  <div className="flex items-center gap-4 mt-4">
                <RiDeleteBin5Line onClick={onDelete} className=" cursor-pointer text-[1.5rem]"/>
                <BsFillPencilFill onClick={() => router.push(`/blogs/${data.id}`)} className=" cursor-pointer text-[1.2rem]"/>
                </div>
              )}
            </div>
          </div>

        {/* <div className="max-w-sm bg-white rounded-[40px] shadow dark:bg-gray-800 ">
            <a href="#">
                <Image width={400} className="w-[500px] rounded-t-[40px] object-contain" height={300} src={data.imageSrc} alt="Blog Image" />
            </a>
            <div className="p-5 bg-[#DFDFDF8A] rounded-b-[40px]">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{data.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-black ">{data.description}</p>
                      {data.userId === currentUser?.id && (
                          <div className="flex items-center gap-4 mt-4">
                        <RiDeleteBin5Line onClick={onDelete} className=" cursor-pointer text-[1.5rem]"/>
                        <BsFillPencilFill onClick={() => router.push(`/blogs/${data.id}`)} className=" cursor-pointer text-[1.2rem]"/>
                        </div>
                      )}
            </div> 
        </div> */}


        
    </div>
  )
}
