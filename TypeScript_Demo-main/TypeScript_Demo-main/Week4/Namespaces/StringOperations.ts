namespace StringOperations {
    export function upper(str: string) {
        console.log(str.toUpperCase());
    }

    export function lower(str: string) {
        console.log(str.toLowerCase());
    }
}

StringOperations.upper("typescript");
StringOperations.lower("HELLO");