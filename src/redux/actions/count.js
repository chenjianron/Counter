import { INCREMENT, DECREMENT } from "../constant";

export const createIncrementAction = () => ({ type: INCREMENT, data: 1 });
export const createDecrementAction = () => ({ type: DECREMENT, data: 1 });
