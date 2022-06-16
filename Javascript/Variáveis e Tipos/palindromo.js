function verificaPalindromo(string) {

    if (!string) return "String inexistente.";

    const SPACE_REMOVE = string.split(" ").join("");
    const STR_LEN = SPACE_REMOVE.length;

    for (let i = 0; i < STR_LEN / 2; i++) {

        if (SPACE_REMOVE[i] !== SPACE_REMOVE[STR_LEN - 1 - i]) {

            return false;
        };
    };

    return true;
};

console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('comida'));
console.log(verificaPalindromo('roma me tem amor'));