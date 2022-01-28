import axios from "axios";

const apiUrlSite = 'https://api.mercadolibre.com/sites/MCO/'
const apiUrlItems = 'https://api.mercadolibre.com/items/'

export const getProductsByName = async (name) => {
    const resp = await axios.get(`${apiUrlSite}search?q=${name}#json`);
    return resp;
}

export const getProductByID = async (id) => {
    const resp = await axios.get(`${apiUrlItems}${id}`);
    return resp;
}

export const getProductDesc = async (id) => {
    const resp = await axios.get(`${apiUrlItems}${id}/description`);
    return resp;
}