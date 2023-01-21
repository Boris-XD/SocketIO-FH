

export const getUltimos = async () => {
    const resp = await fetch('http://localhost:8090/ultimos');
    const data = await resp.json();
    return data.tickets;
}