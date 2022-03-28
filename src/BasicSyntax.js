'use strict';

export function romanToInteger(str) {
    const romArabNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (romArabNumbers[str[i]] < romArabNumbers[str[i + 1]]) {
            result -= romArabNumbers[str[i]];
        } else {
            result += romArabNumbers[str[i]];
        }
    }

    return result;
}
