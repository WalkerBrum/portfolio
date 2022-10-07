import styles from '../styles/nav.module.scss';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>HOME</li>
                <li>SOBRE</li>
                <li>CURSOS</li>
                <li>HABILIDADES</li>
                <li>PROJETOS</li>
            </ul>
        </nav>
    )
}