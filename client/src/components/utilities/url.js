export const apiurl = process.env.Node_ENV === 'production'
? 'https://ava-makeup.herokuapp.com'
: 'http://localhost:5000';