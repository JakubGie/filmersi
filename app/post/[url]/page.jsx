import UserWindow from "@/components/posts/elements/user"
import Replies from "@/components/posts/replies"

    async function getPostId(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPostId/'+url, { cache: 'no-store' })
  
    return res.json()
  }

  async function getPostInfo(id) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPostInfo/'+id, { cache: 'no-store' })
  
    return res.json()
  }

  async function getUserInfo(userId) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getUserInfo/'+userId, { cache: 'no-store' })
  
    return res.json()
  }




  export async function generateMetadata({params}) {
    var postId = await getPostId(params.url)
    var postInfo = await getPostInfo(postId)
    
    postInfo = postInfo[0]

    var userInfo = await getUserInfo(postInfo.user)

    return {
      title: postInfo.title+"  - Forum Filmersi",
      description: postInfo.content,
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: postInfo.title+"  - Forum Filmersi",
        description: postInfo.content
      },
    }
  }



export default async function FullMovie({params}) {
    var postId = await getPostId(params.url)
    var postInfo = await getPostInfo(postId)
    
    postInfo = postInfo[0]

    var userInfo = await getUserInfo(postInfo.user)

    return (
        <div className="w-full relative">


            <div className="absolute w-full"> 

                <div className="container mx-auto px-5">

                   
                    {/*<PostInfo data={postInfo} />*/}

                    <div className="bg-white text-black px-7 py-8 rounded-lg border-b-brand border-[5px] mt-5">

                        <UserWindow user={userInfo} date={postInfo.date}/>

                        <div className="font-medium text-xl pt-4 flex flex-col gap-5">
                            <div className="font-bold">
                                {postInfo.title}
                            </div>
                            <div className="font-normal text-base">
                                {postInfo.content}  
                            </div>
                           
                        </div>


                    </div>

                    <div>
                        <Replies id={postInfo.id} />
                    </div>


                    

                </div>

            </div>

        </div>
    )
  }