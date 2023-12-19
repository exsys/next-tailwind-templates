"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

/**
 * For accessing aos animations in all components.
 * Wrap children in Root Layout like this 
 *  <AosProvider>
 *      {children}
 *  </AosProvider>
 * */


const AosProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return <>{children}</>
}

export default AosProvider;