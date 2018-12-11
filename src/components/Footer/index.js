import React from "react";
import styles from "./styles.module.css";

export default () => (
  <footer className={styles.Footer}>
    <div className={styles.footerNavigation}> 
                    <div id={styles.footerLeft}> 
                        <ul className={styles.footerList}>
                            <li>
                                <a>
                                    <span className={styles.navFooter}>Kontakt</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className={styles.navFooter}>Impressum</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className={styles.navFooter}>Zaštita privatnosti</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className={styles.navFooter}>Marketing</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className={styles.navFooter}>Uvjeti korištenja</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.Copyright}>
                    <a>
                        <span>Copyright Leo Kacic HCI 2018</span>
                    </a>
            </div>
  </footer>
);
