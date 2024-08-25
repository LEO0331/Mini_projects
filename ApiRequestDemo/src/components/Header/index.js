import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";

const navLinks = [
    {
        title: "Welcome to DocuScan Technical Interview",
        url: "/",
    }
];

const Headers = () => {
    const [visibleNav, setVisibleNav] = useState(false);

    const { pathname } = useLocation();

    return (
        <header className={styles.header}>
            <div className={cn("container", styles.container)}>
                <Link
                    className={styles.logo}
                    to="/"
                    onClick={() => setVisibleNav(false)}
                >
                    <Image
                        className={styles.pic}
                        src="/images/logo.png"
                        srcDark="/images/logo.png"
                        alt="DocuScan"
                    />
                </Link>
                <div
                    className={cn(styles.wrap, { [styles.active]: visibleNav })}
                >
                    <nav className={styles.nav}>
                        {navLinks.map((x, index) =>
                            x.content ? (
                                <></>
                            ) : (
                                <NavLink
                                    className={cn(styles.link, {
                                        [styles.active]: pathname === x.url,
                                    })}
                                    to={x.url}
                                    key={index}
                                    onClick={() => setVisibleNav(false)}
                                >
                                    {x.title}
                                </NavLink>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Headers;
