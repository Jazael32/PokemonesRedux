import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { cerrarSessionAction } from '../redux/usuarioDucks';

import {withRouter} from 'react-router-dom';

function Navbar(props) {
    const dispatch = useDispatch();

    const cerrarSession = () => {
        dispatch(cerrarSessionAction());
        props.history.push('/login');
    }

    const activo = useSelector(store => store.usuario.activo);

    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">APP POKE</Link>
            <div className="d-flex">
                { activo ? (
                    <>
                    <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
                    <button className="btn btn-dark mr-2" onClick={() => cerrarSession()}>Cerrar Sesion</button>
                    </>
                ) : (
                    <NavLink className="btn btn-dark mr-2" to="/login" exact>Login</NavLink>
                )
                }
            </div>
        </div>
    )
}

export default withRouter(Navbar)
