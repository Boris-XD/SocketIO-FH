export const getUsuarioStage = () => {
    return {
        agente: localStorage.getItem('agente'),
        escritorio: localStorage.getItem('escritorio'),
    }
}