import { useState, useEffect } from "react"

export default function Test1() {
    const [opacity, setOpacity] = useState(0);
    const dogPic = "/images/sizz_dog.jpg";
    
    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;

            const newOpacity = Math.min(scrollTop / docHeight ,1)

            setOpacity(newOpacity)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {}
    }
,[])
    return(
        <div id="itemContainer" style={{ height: "150vh" }}>
            <img id="sizzdog" src={dogPic} alt="Sarah with dog"
            style={{ opacity: opacity, transition: 'opacity 0.2s ease'}}/>
        </div>
    )
}