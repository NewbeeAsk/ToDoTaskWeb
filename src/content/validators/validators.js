export const requiredRieldValidator = value => {
    if (value) return undefined;
    return 'This field cant be empty'
}

export const maxLengthValidator = (maxLength) => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

export const numberValidator = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValueValidator = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined

