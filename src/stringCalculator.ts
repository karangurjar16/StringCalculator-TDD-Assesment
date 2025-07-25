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

	const filtered = numArray.filter(n => n <= 1000);

	return filtered.reduce((sum, n) => sum + n, 0);
}

function extractDelimiterAndNumberString(input: string): { delimiter: RegExp; numbersString: string } {
  let delimiter: RegExp = /,|\n/;
  let numbersString = input;

  if (input.startsWith('//')) {
    const newlineIndex = input.indexOf('\n');
    const delimiterSection = input.substring(2, newlineIndex);
    numbersString = parseNumbersSection(input, newlineIndex);
    delimiter = parseDelimiters(delimiterSection);
  }

  return { delimiter, numbersString };
}

function parseDelimiters(section: string): RegExp {
  if (section.includes('[')) {
    const parts = section.match(/\[([^\]]+)\]/g) || [];
    const escapedDelimiters = parts.map(d =>
      d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    return new RegExp(escapedDelimiters.join('|'));
  }

  const escaped = section.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(escaped);
}

function parseNumbersSection(input: string, newlineIndex: number): string {
  return input.substring(newlineIndex + 1);
}
