import styled from 'styled-components';

type CounterPropsType = {
    count: number
    maxCount: number
    focused: boolean
    error: boolean
}

export const CounterView = ({count, maxCount, focused, error}: CounterPropsType) => {

    return (
        <CounterBox color={count === maxCount ? 'red' : '#2b2b2b'}>
            {error ? 'Ошибка' : focused ? 'Установите значение' : count}
        </CounterBox>
    )
}

const CounterBox = styled.div`
    color: ${props => props.color};
    background-color: aqua;
    display: flex;
    width: 90%;
    height: 40%;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`