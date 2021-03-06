import {auth, firebase} from '../firebase';

//Data inicial
const dataInicial = {
    loading: false,
    activo: false
}

//Types
const LOADING = 'LOADING';
const USUARIO_ERROR = 'USUARIO_ERROR';
const USUARIO_EXITO = 'USUARIO_EXITO';
const CERRAR_SESSION = 'CERRAR_SESSION';

//Reducer
export default function usuarioReducer (state = dataInicial, action) {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true}

        case USUARIO_ERROR:
            return {...dataInicial}

        case USUARIO_EXITO:
            return {...state, loading: false, user: action.payload, activo: true}

        case CERRAR_SESSION:
            return {...dataInicial}

        default:
            return {...state}
    }
}

//Action
export const ingresoUsuarioAction = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider);
        
        dispatch({
            type: USUARIO_EXITO,
            payload: {
                uid: res.user.uid,
                email: res.user.email
            }
        });

        localStorage.setItem('usuario', JSON.stringify({
            uid: res.user.uid,
            email: res.user.email
        }));

    } catch (error) {
        console.log(error); 
        dispatch({
            type: USUARIO_ERROR
        });
    }
}

export const leerUsuarioActivoAction = () => async (dispatch) => {
    if (localStorage.getItem('usuario')) {
        dispatch({
            type: USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        });
    }
}

export const cerrarSessionAction = () => (dispatch) => {
    auth.signOut();
    localStorage.removeItem('usuario')
    dispatch({
        type: CERRAR_SESSION
    });
}