import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";

const Page = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        clearAllBodyScrollLocks();
    }, [pathname]);

    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.inner}>{children}</div>
        </div>
    );
};

export default Page;
