import BgImage from "@/components/bgImage"
import Footer from "@/components/footer"
import Link from "next/link"

async function getPostInfo(url) {
    var newUrl = 'https://api.filmer.wkbdhkmuzv.cfolks.pl/getBlogPostInfo/' + url
    const res = await fetch(newUrl, { cache: 'no-store' })
    return res.json()
  }
  

export async function generateMetadata({params}) {
    var postInfo = await getPostInfo(params.url)
    postInfo = postInfo[0]

    return {
      title: postInfo.tytul,
      description: postInfo.wstep,
      openGraph: {
        images: [postInfo.obrazek],
        title: postInfo.tytul,
        description: postInfo.wstep
      },
    }
  }



  export default async function BlogPost({params}) {
    var postInfo = await getPostInfo(params.url)
    postInfo = postInfo[0]

    console.log(postInfo)

    var tresc =  postInfo.tresc.replaceAll('original', 'w1280')

    return (
        <div className="w-full relative">

            <BgImage url={postInfo.obrazek} />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex my-16 gap-10 lg:gap-20 flex-col lg:flex-row">
                        <div className="flex gap-3 flex-col">
                            <h1 className="text-3xl lg:text-5xl uppercase font-semibold">{postInfo.tytul}</h1>
                            <p className="text-xl font-light">
                                {postInfo.autor} <span className="text-brand font-semibold">/ {postInfo.data}</span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-pure_white">

                    <div className="container mx-auto px-5 text-black py-10">
                        <p className="introduction text-xl font-semibold">
                            {postInfo.wstep}
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: tresc }} className="blog-post flex gap-5 flex-col">

                        </div>
                        
                    </div>

                </div>

                <Footer/>

            </div>

        </div>
    )
}