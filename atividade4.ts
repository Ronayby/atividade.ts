function concatenar(str1: string, str2: string): string {
    return `${str1} ${str2}`;
}

const primeiraParte: string = "TypeScript é";
const segundaParte: string = "fantástico!";

const fraseCompleta: string = concatenar(primeiraParte, segundaParte);

console.log(fraseCompleta);
