import BgImage from "@/components/bgImage"
import Link from "next/link"

async function getPosts() {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getBlogPosts/' + 8 , { cache: "no-store" })
  
    return res.json()
  }

export async function generateMetadata({params}) {
    return {
      title: "Blog o filmach i serialach - Filmersi",
      description: "Przeczytaj interesujące artykuły o filmach i serialach na naszym blogu online.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Blog o filmach i serialach - Filmersi",
        description: "Przeczytaj interesujące artykuły o filmach i serialach na naszym blogu online."
      },
    }
  }

  export default async function Blog() {
    var posts = await getPosts()

    return (
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/dqK9Hag1054tghRQSqLSfrkvQnA.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex mt-10 gap-10 lg:gap-20 flex-col lg:flex-row pt-10 lg:pt-20">
                        <div className="flex gap-3 flex-col lg:w-[370px]">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Blog</h1>
                            <p className="text-xl font-light">Blog o filmach i serialach</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 mt-6">
                        {posts.map((post) => (
                             <Link href={`/blog/${post.url}`} className="flex flex-col justify-start  sm:flex-row items-center gap-4 text-xl hover:text-brand transition">
                                <img src={post.obrazek} alt={post.tytul}  layout="fill" className="sm:h-[80px] w-full sm:w-auto rounded-lg"/>
                                <div>
                                    {post.tytul}
                                </div>
                            </Link>
                        ))}
                    </div>


                </div>

            </div>

        </div>
    )
}