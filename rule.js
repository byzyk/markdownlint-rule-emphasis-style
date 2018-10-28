// @ts-check

'use strict';

const shared = require('./shared');

const CONSISTENT = 'consistent';

module.exports = {
  names: ['emphasis-style'],
  description: 'Inconsistent emphasis style',
  tags: ['emphasis', 'style'],
  function: function rule(params, onError) {
    let configStyle = params.config.style || CONSISTENT;

    const forToken = token => {
      const tokenStyle = token.markup[0];
      if (configStyle === CONSISTENT) {
        configStyle = tokenStyle;
      }
      shared.addErrorDetailIf(
        onError,
        token.lineNumber,
        configStyle,
        tokenStyle
      );
    };

    shared.forEachInlineChild(params, 'strong_open', forToken);
    shared.forEachInlineChild(params, 'em_open', forToken);
  }
};
