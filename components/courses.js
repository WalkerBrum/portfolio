import { Box } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/courses.module.scss';


export default function Courses() {
    return (
        <section className={styles.courses}>
            <h2>FORMAÇÃO</h2>
            <div>
                <div className={styles.titles}>
                    <Image
                        src="/images/awari.png"
                        height={111}
                        width={111}
                        alt="Awari"
                    />
                    <div className={styles.headers}>
                        <h4>Awari</h4>
                        <p>Desenvolvimento Web Front-end</p>
                        <span>set de 2021 - abr de 2022</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>O curso tem como proposta desenvolver habilidades em Node.js que é um ambiente de execução Javascript para Back-End. Entendendo fundamentos, conhecendo o sistema de módulos e frameworks, padrões arquiteturais com as melhores práticas em programação.</p>
                    <p>O curso abordará tecnologias como: Node.js, Express, PostgreSQL, MySQL, MongoDB, APIs RESTful e GraphQL. No final será desenvolvido um projeto prático usando essas ferramentas.</p>
                </div>
                <div className={styles.titles}>
                    <Image
                        src="/images/awari.png"
                        height={111}
                        width={111}
                        alt="Awari"
                    />
                    <div className={styles.headers}>
                        <h4>Awari</h4>
                        <p>Desenvolvimento Web Back-End</p>
                        <span>set de 2022 - nov de 2022</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>Foi abordado tecnologias como HTML, CSS, SAAS, JavaScript, Next.js, ReactJS e suas bibliotecas como Hooks, Context API, Redux, Material-UI, Styled Components , Axios, entre outros.</p>
                    <p>Baseado nessas tecnologias e suas ferramentas foi possível construir vários projetos práticos na parte de front-end, como:</p>
                    <p>• E-commerce de pokémons usando a API https://pokeapi.co/, onde é possível simular compras de cards de pokémons, adicionando e removendo do carrinho, pesquisando pelo card desejado, entre outras funcionalidades. https://pokeloja-react.vercel.app/.</p>
                    <p>• Pomodoro Timer Concentration, tem como objetivo aumentar a produtividade das pessoas na realização de tarefas. Baseado no método de estudo Pomodoro, no site é possível determinar tempo de trabalho/estudo e de descanso, além disso o mesmo tem outras funcionalidades como um histórico de estudos, espaço para anotar as tarefas e músicas de concentração integradas com o Spotify. https://pomodoroconcentration.netlify.app/.</p>
                </div>
                <div className={styles.titles}>
                    <Image
                        src="/images/redentor.png"
                        height={111}
                        width={111}
                        alt="UniRedentor"
                    />
                    <div className={styles.headers}>
                        <h4>UniRedentor</h4>
                        <p>Desenvolvimento Web Back-End</p>
                        <span>fev de 2014 - nov de 2018</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>O curso é dividido em 10 áreas em que o Engenheiro de Produção pode atuar como Engenharia de Operações e Processos da Produção, Logística, Engenharia do Produto, Engenharia Organizacional, entre outras.</p>
                    <p>O Planejamento e Controle de Produção, que é uma subárea da Engenharia de Operações e Processos da Produção foi implementado em uma indústria de Laticínios . O projeto foi inicialmente feito usando o produto com maior demanda da empresa, determinado pela curva ABC.</p>
                    <p>Após a escolha do produto foi feito levantamentos de seu histórico de vendas dos últimos 4 anos para entender a sua demanda de forma mensal e assim poder determinar que se trata de um produto sazonal, com isso foi possível realizar uma previsão de demanda mais assertiva.</p>
                    <p>Com essa previsão o setor de compras conseguiu otimizar as ordens de compras, de forma que não falte e nem sobre matéria-prima no estoque e consequentemente falte produtos no mercado. Posteriormente o PCP foi implementado no restante do mix de produtos.</p>
                </div>
            </div>
        </section>
    )
}