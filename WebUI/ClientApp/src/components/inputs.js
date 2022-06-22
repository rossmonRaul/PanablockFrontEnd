import React from 'react';
import { Form } from "react-bootstrap"

export const InputText = ({id, label, type, placeholder, value, text, onChange, mensajeValidacion}) => {
    return(
        <Form.Group className="mb-3" controlId={id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} size="sm" value={value} onChange={onChange} required/>
            <Form.Text className="text-muted">{text}</Form.Text>
            <Form.Control.Feedback type="invalid">{mensajeValidacion}</Form.Control.Feedback>
        </Form.Group>
    )
}