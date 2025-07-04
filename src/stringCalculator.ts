export function add(input: string): number {
  if (input === '') {
    return 0;
  }

  const { numbersString, delimiter } = extractDelimiterAndNumberString(input);
  const numArray = numbersString.split(delimiter).map(n => parseInt(n, 10));

  const negatives = numArray.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
  }

  return numArray.reduce((sum, n) => sum + n, 0);
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