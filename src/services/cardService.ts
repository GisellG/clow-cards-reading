import { ClowCards } from '../types';
import cardData from '../utils/clow-cards.json';

const cards: Array<ClowCards> = cardData as Array<ClowCards>;

export const getCards = (): ClowCards[] => cards;

export const getById = (id: number): ClowCards | undefined => {
    const card = cards.find(c => c.id === id)
    return card;
};
