type DisabledCounterType = {
    increment: boolean;
    decrement: boolean;
}

export type CounterType = {
    count: number;
    minCount: number;
    maxCount: number;
    disabledCounter: DisabledCounterType
}

type ActionsType =
    | IncrementActionType
    | DecrementActionType
    | SetCountActionType
    | SetMaxCountActionType
    | SetMinCountActionType
    | SetDisabledCounterActionType

export type IncrementActionType = ReturnType<typeof incrementAC>
export type DecrementActionType = ReturnType<typeof decrementAC>
export type SetCountActionType = ReturnType<typeof setCountAC>
export type SetMaxCountActionType = ReturnType<typeof setMaxCountAC>
export type SetMinCountActionType = ReturnType<typeof setMinCountAC>
export type SetDisabledCounterActionType = ReturnType<typeof setDisabledCounterAC>

const initialState: CounterType = {
    count: 0,
    minCount: 0,
    maxCount: 5,
    disabledCounter: {
        increment: false,
        decrement: false,
    }
}

export const counterReducer = (state: CounterType = initialState, action: ActionsType): CounterType => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + action.payload,
            };
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - action.payload,
            }
        }
        case 'SET_COUNT': {
            return {
                ...state,
                count: action.payload,
            }
        }
        case 'SET_MAX_COUNT': {
            return {
                ...state,
                maxCount: action.payload,
            }
        }
        case 'SET_MIN_COUNT': {
            return {
                ...state,
                minCount: action.payload,
            }
        }
        case 'SET_DISABLED_COUNTER': {
            console.log(action.payload)
            return {
                ...state,
                disabledCounter: {
                    ...state.disabledCounter,
                    increment: action.payload.increment,
                    decrement: action.payload.decrement,
                }
            }
        }
        default:
            return state
    }
}

export const incrementAC = (incrementValue: number) => {
    return {type: 'INCREMENT', payload: incrementValue} as const;
}

export const decrementAC = (decrementValue: number) => {
    return {type: 'DECREMENT', payload: decrementValue} as const;
}

export const setCountAC = (value: number) => {
    return {type: 'SET_COUNT', payload: value} as const;
}

export const setMaxCountAC = (maxCountValue: number) => {
    return {type: 'SET_MAX_COUNT', payload: maxCountValue} as const;
}

export const setMinCountAC = (minCountValue: number) => {
    return {type: 'SET_MIN_COUNT', payload: minCountValue} as const;
}

export const setDisabledCounterAC = (payload: DisabledCounterType) => {
    return {type: 'SET_DISABLED_COUNTER', payload} as const;
}