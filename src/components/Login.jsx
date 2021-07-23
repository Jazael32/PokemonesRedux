import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ingresoUsuarioAction } from '../redux/usuarioDucks';

import {withRouter} from 'react-router-dom';

function Login(props) {
    const dispatch = useDispatch();
    const loading = useSelector(store => store.usuario.loading);
    const activo = useSelector(store => store.usuario.activo);

    React.useEffect(() => {
        if (activo) {
            props.history.push('/');
        }
    }, [activo])

    return (
        <div className="mt-5 text-center">
            <h3>Ingreso con Google</h3>
            <hr/>
            <button className="btn btn-dark" onClick={() => dispatch(ingresoUsuarioAction())}
                disabled={loading}>Acceder</button>
        </div>
    )
}

export default withRouter(Login)
