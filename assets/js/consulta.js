let personajesData = (async () => {
    const response = await fetch("/dbz.json")
    const data = await response.json();
    return data;
})();

export default personajesData;