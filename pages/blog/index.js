import Blogpost from '../../components/Blogpost'
import Createpost from '../../components/Createpost'
import { v4 as uuidv4 } from 'uuid'


function Blog(){

    const Post = [
        {
            author: "St. Salad",
            authorImg: "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
            postText: "Est ullamco occaecat excepteur est nostrud esse tempor aliqua ut. Quis sit eiusmod ut do do. Exercitation pariatur laborum qui ut velit ullamco mollit Lorem occaecat ad culpa qui consectetur velit.",
            postImg: "https://media.vogue.co.uk/photos/60828897496cb3f3c0c142bb/16:9/w_1280,c_limit/jennierubyjane.jpg",
            date: "2 days ago",
        },
        {
            author: "St. Salad",
            authorImg: "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
            postText: "Est ullamco occaecat excepteur est nostrud esse tempor aliqua ut. Quis sit eiusmod ut do do. Exercitation pariatur laborum qui ut velit ullamco mollit Lorem occaecat ad culpa qui consectetur velit.",
            postImg: "",
            date: "1 day ago",
        },
    ]

    const RenderPosts = () =>{
        const arr = []
        Post.map((post) => {
            arr.push(<Blogpost key={uuidv4()} details={post}/>)
        })


        return arr
    }

    return (
        <div>
            <Createpost />
            <RenderPosts />
        </div>
    )
}


export default Blog