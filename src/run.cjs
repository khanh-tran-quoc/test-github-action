// const fs = require('fs');
const { execSync } = require('child_process');

// Check if dist files exist
execSync('npm run build', {stdio: 'inherit'});
execSync('node ./dist/index.js', {stdio: 'inherit'})
// Your action logic here
