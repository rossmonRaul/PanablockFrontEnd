import React from 'react'

const Formulario = ({ mostrarMensaje }) => {
    return(
        <>
            <form >
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" class="form-control" placeholder="Enter email" id="email" />
  </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                        <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
  </div>
                        <div className="form-group form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" /> Remember me
    </label>
  </div>
                <button type="submit" className="btn btn-primary" onClick={() => mostrarMensaje()}>Submit</button>
</form>
        </>
    )
}

export default Formulario