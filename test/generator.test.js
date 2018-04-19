const generate = require('../src/generator');

const basicResponses = {
    "200": {
        "schema": {
            "properties": {
                "field1": {
                    "example": 1
                },
                "field2": {
                    "example": "2"
                },
                "field3": {
                    "example": "field3"
                }
            }
        }
    },
    "400": {
        "schema": {
            "properties": {
                "field1": {
                    "example": 9
                },
                "field2": {
                    "example": "2x"
                },
                "field3": {
                    "example": "field3x"
                }
            }
        }
    }
};


test('basic test is correct', () => {
    let answers = generate(basicResponses);
    expect(Object.keys(answers).length).toBe(2);
});