const HOME_CONTEXT_PREFIX = "bus_editor::home_context::";

const ButtonsDef = [
    {
        title: "Nuevo Parte",
    },
    {
        title: "Eliminar Parte",
    },
    {
        title: "Agregar Parte"
    }
];

const HomeContext = {
    set: (name, value) => {
        localStorage.setItem(HOME_CONTEXT_PREFIX + name, value);
    },
    get: (name) => {
        return localStorage.getItem(HOME_CONTEXT_PREFIX + name);
    }
};


export {HomeContext, ButtonsDef};