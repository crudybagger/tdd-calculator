export const add = (numbers) => {
    const [num1, num2] = numbers.split(",");

    if(isNaN(parseInt(num2))) {
        return numbers;
    }

    return parseInt(num1) + parseInt(num2);
}