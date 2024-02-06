export enum Path {
    CHARACTERS = "characters",
    COMICS = "comics",
    CREATORS = "creators",
    EVENTS = "events",
    SERIES = "series",
    STORIES = "stories",
}

export type PagedResults = {
    count: number;
    limit: number;
    offset: number;
    total: number;
}

export interface Characters extends PagedResults {
    results: Character[];
}

export interface Comics extends PagedResults {
    results: Comic[];
}

export type Url = {
    type: string;
    url: string;
}

export type TextObject = {
    type: string;
    language: string;
    text: string;
}

export type ResourceList<T> = {
    available: number;
    returned: number;
    collectionURI: string;
    items: T[];
}

export interface Character {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: {
        path: string;
        extension: string;
    };
    comics: ResourceList<{
        resourceURI: string;
        name: string;
    }>;
    series: ResourceList<{
        resourceURI: string;
        name: string;
    }>;
    stories: ResourceList<{
        resourceURI: string;
        name: string;
        type: string;
    }>;
    events: ResourceList<{
        resourceURI: string;
        name: string;
    }>;
}

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    resourceURI: string;
    urls: Url[];
    series: {
        resourceURI: string;
        name: string;
    };
    variants: Comic[];
    collections: Comic[];
    collectedIssues: Comic[];
    dates: ComicDate[];
    prices: ComicPrice[];
    thumbnail: {
        path: string;
        extension: string;
    };
    images: Image[];
    creators: ResourceList<{
        resourceURI: string;
        name: string;
        role: string;
    }>;
    characters: ResourceList<{
        resourceURI: string;
        name: string;
    }>;
    stories: ResourceList<{
        resourceURI: string;
        name: string;
        type: string;
    }>;
    events: ResourceList<{
        resourceURI: string;
        name: string;
    }>;
}

export type ComicDate = {
    type: string;
    date: Date;
}

export type ComicPrice = {
    type: string;
    price: number;
}

export type Image = {
    path: string;
    extension: string;
}


