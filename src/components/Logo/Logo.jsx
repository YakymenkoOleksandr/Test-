import css from '../Logo/Logo.module.css'
import { TbDog } from "react-icons/tb";
export default function Logo() {
    

    return (
        <>
            <div className={css.logo}>
                <span className={css.logoPartOne}>The </span>
                <span className={css.logoPartTwo}>pet </span>
                <span className={css.logoPartThree}>project </span>
                <TbDog className={css.dog} />
            </div>
        </>
    )
}

