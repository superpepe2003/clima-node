const axios = require('axios');

const getLugarLatLng = async( dire ) => {

    const encodedUrl = encodeURI( dire );
    
    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'x-rapidapi-key': '13a866bfbemshe5d64f94f48e0d3p14fb72jsn56337cd72d9f'}
    });
    
    const resp = await instance.get();

    if ( resp.data.Results.length ===0 ) {
        throw new Error(`No hay resultados para ${ dire }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return { direccion, lat, lng }

}

module.exports = {
    getLugarLatLng
}