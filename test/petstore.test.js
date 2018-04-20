var fs = require('fs');
var SwaggerParser = require('swagger-parser');

const generate = require('../src/generator');

test('petstore generation is correct', async () => {
    let fileContents = await SwaggerParser.dereference('./test/petstore.json');
    fs.writeFileSync('fileContents.json', JSON.stringify(fileContents, null, 2));
    let responses = fileContents.paths['/pets'].get.responses;
    let answers = generate(responses);
    expect(Object.keys(answers).length).toBe(2);
    expect(answers).toEqual(expected);
});