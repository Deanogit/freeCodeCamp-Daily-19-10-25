// HTML Attribute Extractor
// Given a string of a valid HTML element, return the attributes of the element using the following criteria:

// You will only be given one element.
// Attributes will be in the format: attribute="value".
// Return an array of strings with each attribute property and value, separated by a comma, in this format: ["attribute1, value1", "attribute2, value2"].
// Return attributes in the order they are given.
// If no attributes are found, return an empty array.

function extractAttributes(element) {
  console.log(element);
  // return an array of strings
  // ["attribute1, value1", "attribute2, value2"]
  // space text equals quotes text quotes
  const regex = /^[\s]([a-zA-Z]*)[\=][\"\']([a-zA-Z]*)[\"\']/g;

  const test = regex.test(element);
  console.log(test);

  // return element;
}
