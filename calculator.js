export const add = (numbers) => {
    let numbersArray = [];
    if(numbers.startsWith('//')) {
        const [delimiterString, numbersString] = numbers.split('\n');
        let delimiter = delimiterString.slice(2);
        if(delimiter.startsWith("[")) {
            delimiter = delimiter.slice(1, -1);
            if(delimiter.includes('][')) {
                const delimiters = delimiter.split('][');
                delimiter = "[" + delimiters.join('|') + "]";
                delimiter = new RegExp(delimiter, 'g');
            }
        }
        numbersArray = numbersString.split(delimiter);
    }
    else numbersArray = numbers.split(/[\n,]/);

    if(numbersArray.length === 1 && isNaN(parseInt(numbersArray[0]))) return 0;

    const negatives = numbersArray.filter((number) => parseInt(number) < 0).map(num => parseInt(num));
    if(negatives.length > 0) throw new Error(`negative numbers not allowed ${negatives.join(',')}`);

    numbersArray = numbersArray.map((number) => (parseInt(number) > 1000) ? 0 : number);

    return numbersArray.reduce((sum, number) => (sum + parseInt(number)), 0);
}