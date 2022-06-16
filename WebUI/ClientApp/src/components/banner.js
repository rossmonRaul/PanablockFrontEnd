import React from 'react'

const Banner = ({ titulo, texto, children}) => {
    return (
        <div class="jumbotron text-center">
            <h1>{titulo}</h1>
            <p>{texto}!</p>
            <div>{children}</div>
        </div>
        )
}

export default Banner