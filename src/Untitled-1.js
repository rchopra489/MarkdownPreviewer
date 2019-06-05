import marked from 'marked';

let text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:`;

var tokens = marked.lexer(text);
console.log(marked.parser(tokens));