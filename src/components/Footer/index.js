import React from "react";
import styles from "./styles.module.css";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.footerNavigation}> 
                    <div id={styles.footerLeft}> 
                        <ul className={styles.footerList}>
                            <li>
                                <a>
                                    <span className={styles.main_nav__span}>Oglašavanje</span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <span className={styles.main_nav__span}>Poslovi</span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <span className={styles.main_nav__span}>Kontakt</span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <span className={styles.main_nav__span}>Pretplata</span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <span className={styles.main_nav__span}>Uvjeti korištenja</span>
                                </a>
                            </li>
                            <li>
                                <a >
                                    <span className={styles.main_nav__span}>Email</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id={styles.footerRight}>
                        <div><p>Prati nas i na: </p></div>
                        <div className={styles.share_post}>
                            <a className={styles.facebook}>
                                <i></i>
                            </a>
                            <a className={styles.twitter} >
                                <i ></i>
                            </a> 
                            <a className={styles.googleplus} >
                                <i ></i>
                            </a> 
                            <a className={styles.linkedin} >
                                <i></i>
                            </a> 
                        </div>
                    </div>
                </div>
                <div className={styles.Container}>
                    <a>
                        <span>Copyright Leo Kacic HCI 2018</span>
                    </a>
            </div>
  </footer>
);
