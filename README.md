# markdownlint-rule-emphasis-style

[`markdownlint`](https://github.com/DavidAnson/markdownlint) rule that forces consistency of emphasis style (**bold** or _italic_).

## Install

```sh
npm install --save-dev markdownlint-rule-emphasis-style
```

## Usage

```json
{
  "emphasis-style": { "style": "consistent" }
}
```

### Options

**style** string

- `"consistent"` - first matched style will be forced by default. Default option.
- `"*"` - force `**bold**` and `*italic*` style.
- `"_"` - force `__bold__` and `_italic_` style.

## License

MIT
