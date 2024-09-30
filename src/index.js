import { setOutput } from "@actions/core";

setOutput('result', 'ok')

console.log('ok');
console.log(process.env.HOLISTICS_API_KEY)
