module.exports = {
  "*.{ts}": [
    "jest --bail --findRelatedTests",
    "eslint --fix",
    "prettier --write",
  ],
  "*.{js}": ["eslint --fix", "prettier --write"],
  "*.{json,prettierrc}": ["prettier --parser json --write"],
  "*.{yaml,yml}": ["prettier --parser yaml --write"],
}
