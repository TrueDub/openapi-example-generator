var SwaggerParser = require('swagger-parser');

const generate = require('../src/generator');

test('petstore generation is correct', async () => {
    let fileContents = await SwaggerParser.dereference('./test/petstore.json');
    let responses = fileContents.paths['/pets'].get.responses;
    let answers = generate(responses);
    expect(Object.keys(answers).length).toBe(2);
    expect(answers).toEqual(expected);
});