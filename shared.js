// @ts-check

'use strict';

// Calls the provided function for each matching token
function filterTokens(params, type, callback) {
  params.tokens.forEach(function forToken(token) {
    if (token.type === type) {
      callback(token);
    }
  });
}
module.exports.filterTokens = filterTokens;

// Calls the provided function for each specified inline child token
module.exports.forEachInlineChild = function forEachInlineChild(
  params,
  type,
  callback
) {
  filterTokens(params, 'inline', function forToken(token) {
    token.children.forEach(function forChild(child) {
      if (child.type === type) {
        callback(child, token);
      }
    });
  });
};

// Adds a generic error object via the onError callback
function addError(onError, lineNumber, detail, context, range) {
  onError({
    lineNumber: lineNumber,
    detail: detail,
    context: context,
    range: range
  });
}
module.exports.addError = addError;

// Adds an error object with details conditionally via the onError callback
module.exports.addErrorDetailIf = function addErrorDetailIf(
  onError,
  lineNumber,
  expected,
  actual,
  detail,
  range
) {
  if (expected !== actual) {
    addError(
      onError,
      lineNumber,
      'Expected: ' +
        expected +
        '; Actual: ' +
        actual +
        (detail ? '; ' + detail : ''),
      null,
      range
    );
  }
};
