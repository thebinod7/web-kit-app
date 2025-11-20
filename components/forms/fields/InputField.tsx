import React from 'react';

interface FormInputProps {
    name: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (name: string, value: string) => void;
    disabled?: boolean;
}

export default function FormInputField({
    name,
    type = 'text',
    value,
    placeholder,
    onChange,
    disabled = false,
}: FormInputProps) {
    return (
        <div className="w-full">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={(e) => onChange(name, e.target.value)}
                className={`w-full
            px-4 py-2
            rounded-lg
            bg-gray-100
            border border-gray-200
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-primary/30
            disabled:bg-gray-50
            disabled:text-muted-foreground
            disabled:cursor-not-allowed
            disabled:border-gray-100
            hover:border-gray-300 text-gray-800`}
            />
        </div>
    );
}
