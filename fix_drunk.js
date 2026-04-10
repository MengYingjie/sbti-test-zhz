const fs = require('fs');

let content = fs.readFileSync('/workspace/index.html', 'utf-8');

// Fix the object key "DRUNK" to "CHUNYUAN"
content = content.replace(/"DRUNK": \{\n    "code": "CHUNYUAN"/g, '"CHUNYUAN": {\n    "code": "CHUNYUAN"');

fs.writeFileSync('/workspace/index.html', content);
console.log('Fixed object key');
