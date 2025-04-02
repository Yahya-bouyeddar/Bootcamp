const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

const result = epic.reduce((accumulator, currentValue)=>
{return accumulator+ ' '+currentValue})
console.log(result);
