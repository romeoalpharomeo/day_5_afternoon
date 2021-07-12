import React, { useState } from 'react';

const CharacterBox = (props) => {
    const [form, setForm] = useState("")

    return (
        <div className={props.character.isGood ? "characterBox good" : "characterBox evil"}>
            <div>
                <button onClick={()=>props.onDeleteHandler(props.idx)} className="btn btn-warning" >Delete</button>
            </div>
        <h1>Name: {props.character.name}</h1>
        <div>
            <input type="checkbox" className="form-check-input" checked={props.character.isGood} onChange={()=>props.onCheckbox(props.idx)}/>
            <label>isGood</label>

        </div>
        <form onSubmit={(event)=>props.onSubmitPower(event, props.idx, form)}>
            <input type="text" placeholder="add a power" onChange={(event)=>setForm(event.target.value)}/>
            <input type="submit" className="btn btn-primary" />
            <ul>
            {
                props.character.powers.map((item, idx) => {
                    return <li>{item}</li>
                })
            }
            </ul>
        </form>
        </div>
    )
}

export default CharacterBox;