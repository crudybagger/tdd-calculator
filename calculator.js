export const add = (numbers) => {
    let numbersArray = [];
    if(numbers.startsWith('//')) {
        const [delimiterString, numbersString] = numbers.split('\n');
        const delimiter = delimiterString.slice(2);
        numbersArray = numbersString.split(delimiter);
    }
    else numbersArray = numbers.split(/[\n,]/);

    if(numbersArray.length === 1 && isNaN(parseInt(numbersArray[0]))) return 0;

    return numbersArray.reduce((sum, number) => (sum + parseInt(number)), 0);
}