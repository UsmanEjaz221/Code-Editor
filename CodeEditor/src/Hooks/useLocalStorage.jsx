import React, { useEffect, useState } from "react";

const Prefix = 'CodeEditor-';

function useLocalStorage (key, initialValue) {
    const PrefixedKey = Prefix + key;

    const [value, setValue] = useState(() =>{       // getting the json and saving it in `value` variable
        const jsonValue = localStorage.getItem(PrefixedKey);

        if(jsonValue != null)
            return JSON.parse(jsonValue);

        if(typeof initialValue === 'function'){         // if the initial value is a function then return the function
            return initialValue();
        } else {                                        // if it is not a function then return the value
            return initialValue;
        }
    })

    // saving what is in the `value` variable, in the local storage 
    useEffect(() => {       // what happens everytime the value is changed
        localStorage.setItem(PrefixedKey, JSON.stringify(value));
    }, [PrefixedKey, value]) // these two will be changed and resaved in the local storage

    return [value, setValue]
}

export default useLocalStorage;