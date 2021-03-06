/*
This utility will accept a Javascript object conforming to the Swagger 2.0 specification for a responses object,
and will return a Javascript object with a entry for each response, containing a JSON representation of that response.

It takes the structure of the response object, and adds the example values as the values of the json.
 */

function generate(responses) {
    let output = {};
    for (let response in responses) {
        console.log('response: ' + response);
        if (responses.hasOwnProperty(response)) {
            // generate
            output[response] = generateOutput(responses[response]);
        }
    }
    return output;
}

function generateOutput(response) {
    let output = {};
//loop through the properties of the item
    if (response.hasOwnProperty('schema') && response.schema.type === 'object') {
        for (let elementName in response.schema.properties) {
            if (response.schema.properties.hasOwnProperty(elementName)) {
                // generate
                output[elementName] = processElement(response.schema.properties[elementName]);
            }
        }
    } else if (response.hasOwnProperty('schema') && response.schema.type === 'array') {
        // array schema
        if (!response.schema.items.hasOwnProperty('type')) {
            response.schema.items.type = 'object';
        }
        return ([processElement(response.schema.items)]);
    }
    return output;
}

function processElement(element) {
    if (element.type === 'object') {
        let result = {};
        for (let subElementName in element.properties) {
            if (element.properties.hasOwnProperty(subElementName)) {
                // generate
                result[subElementName] = processElement(element.properties[subElementName]);
            }
        }
        return result;
    } else if (element.type === 'array') {
        return ([processElement(element.items)]);
    } else {
        return element['example'];
    }
}

module.exports = generate;