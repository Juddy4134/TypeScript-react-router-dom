import React, { useState } from 'react';
import { useRef } from 'react';
import { FC } from 'react';

const EventExample: FC = () => {
    const [value,setValue] = useState<string>('');
    const [isDrag,setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler= (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false);
        console.log('DROP')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='controlled'/>
            <input ref={inputRef} type="text" placeholder='unControlled'/>

            <button onClick={clickHandler}>Event Button</button>
            <div 
                onDrag={dragHandler} 
                draggable 
                style={{width:'200px',height: '200px', background: 'red'}}
            ></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler} 
                onDragOver={dragWithPreventHandler}
                style={{marginTop: '15px', width:'200px',height: '200px', background: isDrag ? 'blue' : 'red'}}
            ></div>
        </div>
    );
};

export default EventExample;