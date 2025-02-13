import {Button} from './Button';
import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import {useAppSelector} from './hooks/useAppSelector';
import {useAppDispatch} from './hooks/useAppDispatch';
import {setCountAC, setDisabledCounterAC, setMaxCountAC, setMinCountAC} from '../model/counterReducer';

type SettingsPropsType = {
    setFocused: (focused: boolean) => void
    setError: (error: boolean) => void
}

export const Settings = ({
                             setError,
                             setFocused
                         }: SettingsPropsType) => {

    const { minCount, maxCount } = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch();

    const [maxInputValue, setMaxInputValue] = useState<number>(maxCount)
    const [minInputValue, setMinInputValue] = useState<number>(minCount)
    const [disabled, setDisabled] = useState<boolean>(false)


    const maxCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabledCounterAC({increment: true, decrement: true}))
        setMaxInputValue(Number(e.currentTarget.value))
        if (Number(e.currentTarget.value) <= minInputValue) {
            setDisabled(true)
            setError(true)
        } else {
            setError(false)
            setDisabled(false)
        }
    }

    const minCountHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabledCounterAC({increment: true, decrement: true}))
        setMinInputValue(Number(e.currentTarget.value))
        if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxCount) {
            setDisabled(true)
            setError(true)
        } else {
            setError(false)
            setDisabled(false)
        }
    }



    const setCountSettingsHandler = () => {
        dispatch(setMaxCountAC(maxInputValue))
        dispatch(setMinCountAC(minInputValue))
        dispatch(setCountAC(minInputValue))
        dispatch(setDisabledCounterAC({increment: false, decrement: false}))

        setFocused(false)
    }

    const focusHandler = () => {
        dispatch(setDisabledCounterAC({increment: true, decrement: true}))
        setFocused(true)
    }

    return (
        <SettingsBox>
            <div>
                <input type={'number'} value={maxInputValue} onChange={maxCountHandler} onFocus={focusHandler}/>
                <input type={'number'} value={minInputValue} onChange={minCountHandler} onFocus={focusHandler}/>
            </div>
            <Button name="Set" onClick={setCountSettingsHandler} disabled={disabled}/>
        </SettingsBox>
    )
}

const SettingsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: aqua;
    width: 180px;
    justify-content: space-between;
    padding: 20px;
`

