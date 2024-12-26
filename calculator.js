export const add = (numbers) => {
    let numbersArray = parseNumberString(numbers);

    numbersArray = filterNumbers(numbersArray);

    if(numbersArray.length === 1 && isNaN(parseInt(numbersArray[0]))) return 0;

    return numbersArray.reduce((sum, number) => (sum + parseInt(number)), 0);
}

export const subtract = (numbers) => {
    return 0;
}

const parseNumberString = (numbers) => {
    if(numbers.startsWith('//')) {
        const [delimiterString, numbersString] = numbers.split('\n');
        let delimiter = delimiterString.slice(2);
        if(delimiter.startsWith("[")) {
            delimiter = delimiter.slice(1, -1);
            if(delimiter.includes('][')) {
                const delimiters = delimiter.split('][');
                const escapedDelimiters = delimiters.map(d => d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
                delimiter = new RegExp(escapedDelimiters.join("|"));
            }
        }
        return numbersString.split(delimiter);
    }
    return numbers.split(/[\n,]/);
}

const filterNumbers = (numbersArray) => {
    const negatives = numbersArray.filter((number) => parseInt(number) < 0).map(num => parseInt(num));
    if(negatives.length > 0) throw new Error(`negative numbers not allowed ${negatives.join(',')}`);

    return numbersArray.map((number) => (parseInt(number) > 1000) ? 0 : number);
}