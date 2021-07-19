import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {unPokeDetalleAccion} from '../redux/pokesDucks';

function Detalle() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(unPokeDetalleAccion())
        }
        fetchData();
    }, [dispatch])

    const pokemon = useSelector(store => store.pokemones.unPokemon)

    return pokemon ? (
        <div className="card mt-4 text-center">
            <div className="card-body">
                <img src={pokemon.photo} className="img-fluid" alt={pokemon.nombre}/>
                <div className="card-title text-uppercase">{pokemon.nombre}</div>
                <p className="card-text">Alto: {pokemon.alto}| Ancho: {pokemon.ancho}</p>
            </div>
        </div>
    ) : null
}

export default Detalle
