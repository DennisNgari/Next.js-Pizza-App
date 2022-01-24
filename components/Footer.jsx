import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        THE AUSPISCIOUS PIZZA INN
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> FIND OUR INN</h1>
                    <p className={styles.text}>
                    <br />  1654 R. SEATTLLE 
                    New York (602)456-445
                    </p>
               
                    <p className={styles.text}>
                    <br />  1654 R. SEATTLLE 
                    New York (602)456-445
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> WORKING HOURS</h1>
                    <p className={styles.text}>
                    <br />  MONDAY TILL FRIDAY
                    <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                    <br />  SATURDAY - SUNDAY  
                    <br /> 12:00 - 2400
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
