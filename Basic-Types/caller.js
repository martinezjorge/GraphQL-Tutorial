const fetch = require('node-fetch');

fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ quoteOfTheDay }"})
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));

fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ random }"})
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));


fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ rollThreeDice }"})
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));