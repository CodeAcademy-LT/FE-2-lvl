import { INCREMENT, DECREMENT } from '../constants/counterConstants';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
