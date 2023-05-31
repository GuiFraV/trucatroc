import SingleBlog from "@/components/SingleBlog";
import getBlogs,{IBlogParams} from "./actions/getBlogs"
import getCurrentUser from "./actions/getCurrentUser"
import Link from "next/link";
import HeroHeader from "@/components/HeroHeader";

interface HomeProps {
  searchParams: IBlogParams
};



export default async function Home({searchParams}:HomeProps) {

  const currentUser = await getCurrentUser();

  const blogs = await getBlogs(searchParams)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 ">
      <HeroHeader />
        <h1 className="font-bold text-3xl border-2">Annonces populaires</h1>
        {blogs.map((item:any) => (
          <SingleBlog
          key={item.id}
          data={item}
          currentUser={currentUser}
          />
        ))}
    </main>
  )
  }