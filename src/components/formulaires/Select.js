import React from "react";

/**
 * Ensemble permettant de définir un champ de formulaire de type select avec message d'erreur
 */
export default function Select({
    id,
    label,
    value,
    disabled = false,
    onChange,
    children,
}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <div>
                <select
                    id={id}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                >
                    {children}
                </select>
            </div>
        </>
    );
}
