import React from 'react';
import styles from '@/styles/Header.module.css';
import Btn from './Btn';

const Header = ({page, setPage}) => {
    const active = {
        borderBottom: "2px solid white"
    }
    const inactive = {
        borderBottom: "0px solid white"
    }
    
    return (
        <>
        <nav className={`${styles.nav}`}>
            <h1>Simple To-Do List</h1>
            <div className={`${styles.navOptions}`}>
                <ul className={`${styles.navLinks}`}>
                    <li>
                    <Btn
                        text="To Do"
                        btntype="nav"
                        onClick={() => setPage('todo')}
                        className={page == 'todo' ? active : inactive}
                    />
                    </li>
                    <li>
                        <Btn
                            text="Edit"
                            btntype="nav"
                            onClick={() => setPage('edit')}
                            className={page == 'edit' ? active : inactive}
                        />
                    </li>
                    <li>
                        <Btn
                            text="How To"
                            btntype="nav"
                            onClick={() => setPage('howto')}
                            className={page == 'howto' ? active : inactive}
                        />
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Header;