var fs = require('fs');
var SwaggerParser = require('swagger-parser');

const generate = require('../src/generator');

test('petstore generation is correct', async () => {
    let fileContents = await SwaggerParser.dereference('./test/petstore.json');
    fs.writeFileSync('fileContents.json', JSON.stringify(fileContents, null, 2));
    let responses = fileContents.paths['/v1/data/duns/{dunsNumber}?productId=cmpelk&versionId=v2'].get.responses;
    let answers = generate(responses);
    expect(Object.keys(answers).length).toBe(1);
    expect(isValidJson(answers['200'])).toBeTruthy();
});

function isValidJson(json) {
    fs.writeFileSync('fileContentsXX.json', JSON.stringify(json, null, 2));
    try {
        JSON.parse(JSON.stringify(json));
        return true;
    } catch (e) {
        return false;
    }
}