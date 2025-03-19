import { getProductsUrl, postLoginUrl, postRegisterUrl } from "./constants"

const getProductsData = async () => {
    const res = await fetch(getProductsUrl)
    const data = await res.json()
    return data
}

const postRegisterData = async(payload)=>{
    const res = await fetch(postRegisterUrl, payload)
    const data = await res.json()
    return data
}
const postLoginData = async(payload)=>{
    const res = await fetch(postLoginUrl, payload)
    const data = await res.json()
    return data
}

export {getProductsData, postRegisterData, postLoginData}