import chalk from "chalk";
export function colorer(message){
    console.log(chalk.green(message));   
console.log(chalk.red(message));
console.log(chalk.blue(message));
}

colorer('hello yahya')