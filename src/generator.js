/*
This utility will accept a Javascript object conforming to the Swagger 2.0 specification for a responses object,
and will return a Javascript object with a entry for each response, containing a JSON representation of that response.

It takes the structure of the response object, and adds the example values as the values of the json.
 */

function generate(responses) {
    var output = {};
    for (var response in responses) {
        if (responses.hasOwnProperty(response)) {
            // generate
            var responseOutput = generateResponse(responses.response);
            output[response] = responseOutput;
        }
    }
    return output;
}

function generateResponse() {
    var output = {};
//loop through the properties of the item
    return output;
}

module.exports = generate;