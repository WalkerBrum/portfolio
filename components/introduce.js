import styles from '../styles/introduce.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import TypewriterEffect from 'typewriter-effect';
import Typewriter from 'typewriter-effect';

export default function Apresentation() {

    return (
        <div className={styles.introduce}>

            <div className={styles.title}>

                <TypewriterEffect
                    options={{
                        cursor: '',
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('<p>OLÁ, EU SOU<p>')
                        typewriter.typeString('<h1>WALKER LOBATO<h1>')
                        typewriter.typeString('<p>DESENVOLVEDOR WEB FRONT-END<p>')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                    }}
                />
                
            </div>

            <Image
                src="/images/foto-walker.png"
                className={styles.image}
                height={400}
                width={400}
                alt="Walker Lobato"
            />

        </div>
    )
}