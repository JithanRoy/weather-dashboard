import {useEffect, useRef} from "react";

const useDebounce = (callback, delay) => {
    const timeOutRef = useRef();
    useEffect(() => {
        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current);
            }
        }
    }, [])

    const debouncedCallback = (...arg) => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }
        timeOutRef.current = setTimeout(() => {
            callback(...arg)
        }, delay)
    }
    return debouncedCallback;
}

export default useDebounce;