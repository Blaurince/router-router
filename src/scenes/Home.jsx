import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();
    return (
        <>
        <h1> Home </h1>
        <img src="https://picsum.photos/300/300" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In temporibus, ut autem cupiditate expedita pariatur facere, praesentium excepturi laborum blanditiis veniam! Quod, deleniti fuga praesentium quidem quae magni minima earum.</p>
        <button onClick={ () => navigate('/about')}>About</button>
        </>
    )
}