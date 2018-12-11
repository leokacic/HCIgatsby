import React from "react";
import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>
      <span className={styles.Logo}>Svijet oko nas</span>
      <Nav>
        <NavLink to="/" exact="true">
          Naslovnica
        </NavLink>
        <NavLink to="/kultura">Kultura</NavLink>
        <NavLink to="/zivotinje">Životinje</NavLink>
        <NavLink to="/putovanja">Putovanja</NavLink>
        <NavLink to="/zanimljivosti">Zanimljivosti</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </Nav>
    </Container>
  </header>
);
