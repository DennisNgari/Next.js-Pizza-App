import styles from "../../styles/product.module.css"
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size,setSize] = useState(0)
    const pizza = {
        id:1,
        img:"/img/pizza.png",
        name:"Peporoni",
        price:[19.9, 23.9, 27.9],
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, modi saepe. Iure, quo minus? Dolore facere vitae aperiam reiciendis dignissimos vero eligendi magnam voluptate aliquid voluptatum quos, perferendis odio inventore asperiores corrupti ex ad porro. Labore magnam eius ipsum cupiditate amet optio maiores ducimus, placeat, quisquam nesciunt nisi soluta recusandae."
    };


    return (
        <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src={pizza.img} objectFit="contain" layout="fill" alt=""/>
        </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.title}>Choose Your Size</h3>
            <div className={styles.sizes}>
            <div className={styles.size} onClick={()=> setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>small</span>
            </div>
            <div className={styles.size} onClick={()=> setSize(1)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>medium</span>
            </div>
            <div className={styles.size} onClick={()=> setSize(2)}>
                <Image src="/img/size.png"  layout="fill" alt=""/>
                <span className={styles.number}>large</span>
            </div>

            </div>
            <h3 className={styles.choose}>Choose Additional Ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" name="double" id="double" className={styles.checkbox} />
                    <label htmlFor="double"> Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name="cheese" id="cheese" className={styles.checkbox} />
                    <label htmlFor="cheese"> Extra cheese</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name = "spicy" id="spicy" className={styles.checkbox} />
                    <label htmlFor="spicy">Super Spicy</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" name = "garlic" id="garlic" className={styles.checkbox} />
                    <label htmlFor="garlic">Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}> Add to Cart</button>
            </div>
        </div>
        </div>
    )
}

export default Product
