import styles from '../styles/introduce.module.scss';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import { DeleteIcon, SendIcon } from '@mui/icons-material';

import Typewriter from 'typewriter-effect';


export default function Apresentation() {

    return (
        <section className={styles.introduce}>

            <div className={styles.title}>

                <Typewriter
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

                <Box
                    sx={{
                        minWidth: 350,
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        gap: '10'
                    }}
                >
                    <Button 
                        variant="outlined" 
                        size="large" 
                        href='https://www.linkedin.com/in/walkerlobato/' 
                        target='_blank'
                    >
                        Linkedin
                    </Button>
                    
                    <Button 
                        variant="outlined" 
                        size="large"
                        href='https://github.com/WalkerBrum?tab=repositories' 
                        target='_blank'>
                        Github
                    </Button>
                </Box>

            </div>

            <Image
                src="/images/foto-walker.png"
                className={styles.image}
                height={400}
                width={400}
                alt="Walker Lobato"
            />

        </section>
    )
}