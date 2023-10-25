import React from 'react';

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            className='rounded-lg bg-gray-50 border-gray-400 bottom-4 shadow-lg m-8 p-3 text-xl'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
