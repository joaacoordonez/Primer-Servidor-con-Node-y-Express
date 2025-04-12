export const horaActual = () => {
    const ahora = new Date();
    return ahora.toLocaleTimeString('es-AR');
};

export const fechaCompleta = () => {
    const ahora = new Date();
    return ahora.toLocaleString('es-AR');
}