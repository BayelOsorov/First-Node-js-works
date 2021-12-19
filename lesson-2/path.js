const path = require('path')
const directory = path.join('user', 'daniel', 'photos')
// console.log(directory);
const absolutePath = path.join(__dirname, 'home', 'course', 'makers')
// console.log(absolutePath);
const dir = path.resolve('src', 'components', 'Buttons')
// console.log(dir);
const fileExtension = path.extname('/utils/hook/useStyles.tsx')
// console.log(fileExtension);
const nodes = __filename;
// console.log(path.dirname(nodes));
// console.log(path.basename(nodes));
// console.log(path.extname(nodes));

// console.log(path.normalize('projects/final-hackaton/..//index.js'));
