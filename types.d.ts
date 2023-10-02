type Movie = {
    "id": number,
    "type": string,
    "title": string,
    "genre": string,
    "poster": string,
    "date": string,
    "description": string,
    "cast": [{
      "id": number,
      "actor": string
    }],
    "director": string,
    "screenshots": [{
      "id": number,
      "screen": string
    }]
  }

