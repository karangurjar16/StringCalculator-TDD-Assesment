export function add(input: string) {
    if (input === '') {
        return 0;
    }

    const numbers = input.split(',');
    return numbers.reduce((sum, x) => sum + parseInt(x, 10), 0);

}