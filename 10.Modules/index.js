import chalk from "chalk";
import { add, multiply } from "./controller.js";

console.log(chalk.green.bold(multiply(add(1, 2), add(4, 5))));