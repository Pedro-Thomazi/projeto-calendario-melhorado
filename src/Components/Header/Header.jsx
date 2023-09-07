import { useState } from 'react'

import styles from './Header.module.css'
import LittleCalendar from '../LittleCalendar/LittleCalendar'

const Header = () => {
    const [menuActive, setMenuActive] = useState('')

    const showOrHideMenu = () => {
        if (menuActive === '') {
            setMenuActive(styles.openMenu)
        }
        else {
            setMenuActive('')
        }

        console.log(menuActive)
    }
    return (
        <header className={`${styles.header} ${menuActive}`}>
            <div>
                <div className={styles.btnHamb}>
                    <i className="bi bi-list" onClick={showOrHideMenu}></i>
                    <p className={styles.expand}>Expandir</p>
                    <p className={styles.toRecall}>Recolher</p>
                </div>
                <div className={styles.addEvents}>
                    <i className="bi bi-plus-lg"></i>
                    <p>Novo Evento</p>
                </div>
                <div className={styles.littleCalendar}>
                    <LittleCalendar />
                </div>
            </div>
            <div>
                <div className={styles.configs}>
                    <i className="bi bi-gear-fill"></i>
                    <p>Configurações</p>
                </div>
            </div>
        </header>
    )
}

export default Header