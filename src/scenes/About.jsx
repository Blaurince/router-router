import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate() 

    return (
        <> 
        <h2>About</h2>
        <img src="https://picsum.photos/300/500" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nihil facilis nisi voluptatibus neque rerum quibusdam laudantium ex iure, reprehenderit repellendus quis modi vero recusandae, impedit quidem fuga cum maiores.</p>
        <button onClick={ () => navigate('/')}> Home </button>
        </>
    )
}