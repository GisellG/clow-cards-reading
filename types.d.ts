export type Guardian = 'Moon' | 'Sun';
export type Attribute = 'Light' | 'Earth' | 'Fire' | 'Dark' | 'Water' | 'Wind';

export interface ClowCards {
    name: string;
    meaning: string;
    tarotSubstitute: string;
    message: string;
    warning: string;
    guardian: Guardian;
    attribute: Attribute;
    keywords: string[];
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    googleConnected: boolean;
}

export interface TypedRequestBody<T> extends Express.Request {
    body: T
}
