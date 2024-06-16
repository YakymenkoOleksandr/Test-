import css from '../Navigation/Navigation.module.css'

export default function Navigation() {
    
    return (
        <nav className={css.nav}>
            <ul className={css.pages}>
                <li className={css.homePage}>Home page</li>
                <li className={css.weatherPage}>Weather</li>
                <li className={css.autorPage}>Autor</li>
            </ul>       
        </nav>
    );
}