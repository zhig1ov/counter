import React, {useEffect} from 'react';
import {CounterView} from './CounterView';
import {Button} from './Button';
import {incrementAC, setCountAC, setDisabledCounterAC} from '../model/counterReducer';
import {useAppSelector} from './hooks/useAppSelector';
import {useAppDispatch} from './hooks/useAppDispatch';


type CounterPropsType = {
    focused: boolean
    error: boolean
}
const Counter = ({error, focused}: CounterPropsType) => {
    const {count, minCount, maxCount} = useAppSelector(state => state.counter);
    const {increment, decrement} = useAppSelector(state => state.counter.disabledCounter);
    const dispatch = useAppDispatch();
    useEffect(() => {

    }, []);

    const incrementCount = () => {
        dispatch(incrementAC(1))
        if (count + 1 === maxCount) {
            dispatch(setDisabledCounterAC({increment: true, decrement: false}))
        } else {
            dispatch(setDisabledCounterAC({increment: false, decrement: false}))
        }
    }

    const resetCount = () => {
        dispatch(setDisabledCounterAC({increment: false, decrement: true}))
        dispatch(setCountAC(minCount))
    }
    return (
        <div className="Counter">
            <CounterView count={count} maxCount={maxCount} focused={focused} error={error}/>
            <div className={'buttons'}>
                <Button name={'inc'} onClick={incrementCount} disabled={increment}/>
                <Button name={'reset'} onClick={resetCount} disabled={decrement}/>
            </div>
        </div>
    );
};

export default Counter;