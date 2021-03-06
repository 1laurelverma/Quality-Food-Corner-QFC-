import axios from 'axios';
const API = process.env.REACT_APP_BACKEND_API

export const addOfferDatabase = async (userId, token, offer) => {
    try {

        let formData = new FormData();

        formData.append('name', offer.name)
        formData.append('feature1', offer.feature1)
        formData.append('feature2', offer.feature2)
        formData.append('feature3', offer.feature3)
        formData.append('offerImage', offer.offerImage)
        formData.append('isActive', offer.isActive)

        const response = await axios.post(`${API}/offer/create/${userId}`, formData, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        })

        if (response) {
            console.log(response);
            return response
        }
        
    } catch (error) {
        console.log(error.response);
        return error.response;
    }
}