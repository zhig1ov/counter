import React, {useState} from 'react';
import './App.css';
import {Settings} from './components/Settings';
import Counter from './components/Counter';


function App() {
    const [focused, setFocused] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    return (
        <div className="App">
            <Settings
                setFocused={setFocused}
                setError={setError}
            />
            <Counter focused={focused} error={error}/>
        </div>
    );
}

export default App;
