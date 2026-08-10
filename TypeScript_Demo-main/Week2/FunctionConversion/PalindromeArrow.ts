const palindrome = (str: string): void => {
    const rev = str.split("").reverse().join("");
    console.log(str === rev ? "Palindrome" : "Not Palindrome");
};

palindrome("madam");