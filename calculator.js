export const add = (numbers) => {
    const numbersArray = numbers.split(/[\n,]/);

    if(isNaN(parseInt(numbersArray[1]))) {
        return numbers;
    }

    return numbersArray.reduce((sum, number) => (sum + parseInt(number)), 0);
}