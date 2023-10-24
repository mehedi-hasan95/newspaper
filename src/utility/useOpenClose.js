import { useState, useEffect, useRef } from "react";

export const useOpenClose = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handleOutsideClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return { isOpen, setIsOpen, ref };
};
