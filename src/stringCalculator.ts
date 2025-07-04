export function add(input: string) {
    if (input === '') {
        return 0;
    }

    let delimiters: RegExp = /,|\n/;
    const numArray = input.split(delimiters);

    return numArray.reduce((sum, x) => sum + parseInt(x, 10), 0);

}