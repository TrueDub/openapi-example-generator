const generate = require('../src/generator');

const basicResponses = {
    "200": {
        "schema": {
            "properties": {
                "field1": {
                    "type": "string",
                    "example": 1
                },
                "field2": {
                    "type": "string",
                    "example": "2"
                },
                "field3": {
                    "type": "string",
                    "example": "field3"
                },
                "field4": {
                    "type": "object",
                    "properties": {
                        "prop1": {
                            "type": "string",
                            "example": "p1"
                        },
                        "prop2": {
                            "type": "string",
                            "example": "p2"
                        },
                        "prop3": {
                            "type": "string",
                            "example": "p3"
                        }
                    }
                }
            }
        }
    },
    "400": {
        "schema": {
            "properties": {
                "field1": {
                    "type": "string",
                    "example": 9
                },
                "field2": {
                    "type": "string",
                    "example": "2x"
                },
                "field3": {
                    "type": "string",
                    "example": "field3x"
                },
                "field4A": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "propA1": {
                                "type": "string",
                                "example": "pA1"
                            },
                            "propA2": {
                                "type": "string",
                                "example": "pA2"
                            },
                            "propA3": {
                                "type": "string",
                                "example": "pA3"
                            }
                        }
                    }
                }
            }
        }
    }
};

const expected = {
    "200": {
        "field1": 1,
        "field2": "2",
        "field3": "field3",
        "field4": {
            "prop1": "p1",
            "prop2": "p2",
            "prop3": "p3"
        }
    },
    "400": {
        "field1": 9,
        "field2": "2x",
        "field3": "field3x",
        "field4A": [{
            "propA1": "pA1",
            "propA2": "pA2",
            "propA3": "pA3"
        }]
    }
};

test('basic test is correct', () => {
    let answers = generate(basicResponses);
    expect(Object.keys(answers).length).toBe(2);
    expect(answers).toEqual(expected);
});