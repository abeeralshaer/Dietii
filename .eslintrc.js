module.exports = {
"env": {

    "browser": true,
    "commonjs": true,
    "node": true,
    "jest": true,
    "es6": true
},
"extends": ["eslint:recommended", "plugin:react/recommended"],
"parserOptions": {
"ecmaFeatures": {
"jsx": true
},
"sourceType": "module"
},
"plugins": [
"react",
"standard",
"promise"
],
"rules": {
 "react/display-name": [2],
 "react/prop-types":[1],
"indent": [
"error",
2
],
"linebreak-style": [
"error",
"unix"
],
"quotes": [
"error",
"single"
],
"semi": [
"error",
"always"
]
},
"globals": {
gapi: true
}
}
