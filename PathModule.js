const path = require("path");
// The path module provides utilities for working with file and directory paths.

// The path.dirname() method returns the directory name of a path
__dirname; // /Users/zeynep/Documents/Node.js

__filename; // /Users/zeynep/Documents/Node.js/PathModule.js

// The path.basename() method returns the last portion of a path
`Your directory is: ${path.basename(__dirname)}`;
// Your directory is: Node.js
`Your file is: ${path.basename(__filename)}`;
// Your file is: PathModule.js

path.join(__dirname, "css", "styles.css");
// /Users/zeynep/Documents/Node.js/css/styles.css
