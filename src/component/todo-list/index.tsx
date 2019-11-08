import React, {useState} from 'react';

export default () => {

    const [name, setName] = useState('name');

    function onChangeName(value: string) {
        setName(value);
    }

    function logCurrentName(event: any) {
        console.log("###event ", event);
        console.log("###name ", name);
    }

    return (
        <div>
            <ul>
                <li>1. stand up</li>
                <li>2. coffee</li>
                <li>3. code</li>
                <li>{name}</li>
            </ul>
            <input type="text" value={name} onChange={event => onChangeName(event.target.value)}/>
            <button onClick={event => logCurrentName(event)}>log name</button>
        </div>
    )
}
