import React from 'react';
import { Form } from "react-bootstrap"

export const InputText = ({id, label, type, placeholder, value, text, onChange, mensajeValidacion, pattern}) => {
    return(
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} size="sm" value={value} onChange={onChange} pattern={pattern} required/>
            <Form.Text className="text-muted">{text}</Form.Text>
            <Form.Control.Feedback type="invalid">{mensajeValidacion}</Form.Control.Feedback>
        </Form.Group>
    )
}

export const InputSelect = ({className, controlId, label, data, onChange, value, optionValue, optionLabel}) => {
    const ObtenerOptions = () => {
        return data.map((option, index) => {
            return <option key={index} value={option[optionValue]}>{option[optionLabel]}</option>
        })
    }

    return( 
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Select className={className} size="sm" onChange={onChange} defaultValue={value}>
                {ObtenerOptions()}
            </Form.Select>
        </Form.Group>    
    )
}