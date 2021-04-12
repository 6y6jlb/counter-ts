import reducer, { setNewValueAC } from "./counterReducer";


test('reducers', () => {
    const state = {
        count: 0,
        startValue: 0,
        maxValue: 1,
        error: false,
        collapsed: true,
        displayString: null as null | string
    }
    const newState = reducer(undefined, setNewValueAC(10));
    expect(newState.count).toBe(10);
});
