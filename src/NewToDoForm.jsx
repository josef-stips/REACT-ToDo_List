import { useState } from "react";

export const NewToDoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(newItem === "") return;

        onSubmit(newItem);

        // reset input value
        setNewItem("");
    };

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input 
                value={newItem}
                type="text" 
                id="item" 
                onChange={e => {setNewItem(e.target.value)}}
            />
        </div>

        <button className="btn">Add</button>
        </form> 
    );
};