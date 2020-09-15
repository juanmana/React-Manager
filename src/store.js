import { createStore } from "redux"
import foto1 from './img/foto1.png'
import foto2 from './img/foto2.jpg'
import foto3 from './img/foto3.jpeg'


const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juanito",
            foto: foto1
        },
        {
            id: 2,
            nombre: "Polo",
            foto: foto2
        },
        {
            id: 3,
            nombre: "Fer",
            foto: foto3,
        },
        {
            id: 4,
            nombre: "Juan",
            foto: foto3,
        },
        {
            id: 5,
            nombre: "Alvaro",
            foto: foto2 
        },
        {
            id: 6,
            nombre: "Alexys",
            foto: foto1,
        },
        {
            id: 7,
            nombre: "Harold",
            foto: foto3,
        },
        {
            id: 8,
            nombre: "Manu",
            foto: foto2 
        },
        {
            id: 9,
            nombre: "Rodríguez",
            foto: foto3,
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            foto: foto1,
        },
        {
            id: 11,
            nombre: "Ricardo",
            foto: foto1
        },
        {
            id: 12,
            nombre: "Deivis",
            foto: foto1,
        },
        {
            id: 13,
            nombre: "Percy",
            foto: foto3,
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ) {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if ( action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)