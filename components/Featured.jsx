import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Featured.module.css"

const images = [
    "/img/featured.png",
    "/img/pizzaimg1.png",
    "/img/featured2.png",
];
const Featured = () => {
    const [index, setIndex]= useState(0)
//Handle slider
const handleArrow=(direction)=>{
    if(direction === "l"){
        setIndex(index !== 0 ? index - 1 : 2)
    }
    if(direction === "r"){
        setIndex(index !== 2 ? index + 1 : 0)
    }
}

    return (
            <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow("l")}>
                <Image src="/img/arrowl.png" layout="fill" alt="" objectFit="contain"/>
            </div>
                <div className={styles.wrapper} style={{transform:`translateX(${-100 * index}vw)`}}>
                        {images.map((img, i)=>(
                            <div className={styles.imgContainer} key={i}>
                                <Image src={img}  layout="fill" alt="" objectFit="cover"/>
                            </div>
                        ))}
                </div>
                <div className={styles.arrowContainer}style={{right:0}} onClick={()=>handleArrow("r")}>
                <Image src="/img/arrowr.png"  layout="fill" alt="" objectFit="contain"/>
            </div>
            </div>
        
    )
}

export default Featured;
