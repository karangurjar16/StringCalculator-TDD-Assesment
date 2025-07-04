export function add(input: string) {
    if (input === '') {
        return 0;
    }

    const numbers = input.split(',');

    if (numbers.length === 1) {
        return parseInt(numbers[0], 10);
    }

    return parseInt(numbers[0], 10) + parseInt(numbers[1], 10);

}