import { add, multiply } from './math.js';
import _ from 'lodash';
console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(5, 3));
const numbers = [10, 20, 30, 40];
console.log("sum est ", _.max(numbers));
console.log("sum est ", _.sum(numbers));
