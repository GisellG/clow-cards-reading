export type Guardian = 'Moon' | 'Sun';
export type Attribute = 'Light' | 'Earth' | 'Fire' | 'Dark' | 'Water' | 'Wind';

export interface ClowCards {
    id: number;
    name: string;
    meaning: string;
    tarotSubstitute: string;
    message: string;
    warning: string;
    guardian: Guardian;
    attribute: Attribute;
    keywords: string[];
}
