export class News {
    "status": string;
    "totalResults": Number;
    "articles": [Article];
}

export class Article {
    "source": Source;
    "author": string;
    "title": string;
    "description": string;
    "url": string;
    "urlToImage": string;
    "publishedAt": Date;
    "content": string;
}

export class Source {
    "id": string | null;
    "name": string | null;
}

export class Stock {
    "id": string;
    "name": string;
    "price": Number;
    "updated": Number;
}
