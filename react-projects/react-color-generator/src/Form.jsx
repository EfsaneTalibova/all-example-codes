import React, { useState } from 'react'
import ColorList from './ColorList'

const Form = ({addColor}) => {
    const [color, setColor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(color)
    }
    return (
        <section className='container'>
            <h4>Color generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)} />
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)} placeholder='#315c72' />
                <button
                    className='btn'
                    type='submit'
                    style={{ backgroundColor: color }}>
                        Submit
                </button>
            </form>
        </section>
    )
}

export default Form
