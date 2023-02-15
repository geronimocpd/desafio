import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
            count: 0,
            name: '',
            endereco: '',
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}

function App() {
    const [formData, setFormData] = useReducer(formReducer, {
        count: 100,
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000);
    }

    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        })
    }
    return(
        <div className="wrapper">
            {submitting &&
                <div>
                    You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>: {value.toString()}</li>
                        ))}
                    </ul>
                </div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Nome</p>
                        <input name="name" onChange={handleChange} value={formData.name || ''}/>
                    </label>
                    <label>
                        <p>Peso</p>
                        <input type="number" name="count" onChange={handleChange} step="1" value={formData.count || ''}/>
                    </label>
                    <label>
                        <p>Endereço</p>
                        <input  name="endereco" onChange={handleChange} value={formData.endereco || ''} />
                    </label>
                </fieldset>
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>
    )
}

export default App;