export function add(input: string) {
    if (input === '') {
        return 0;
    }

    const { numbersString, delimiter } = extractDelimiterAndNumberString(input);
    const numArray = numbersString.split(delimiter);

    return numArray.reduce((sum, x) => sum + parseInt(x, 10), 0);

}

function extractDelimiterAndNumberString(input: string): { delimiter: RegExp; numbersString: string } {
  let delimiter: RegExp = /,|\n/;
  let numbersString = input;

  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\n');
    const delimiterSection = input.substring(2, newlineIndex);
    numbersString = input.substring(newlineIndex + 1);

    const escapedDelimiter = delimiterSection.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    delimiter = new RegExp(escapedDelimiter);
  }

  return {
    delimiter,
    numbersString,
  };
}