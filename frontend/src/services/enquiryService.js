import api from "./api";


export const sendEnquiry = async (enquiryData) => {

    const response = await api.post(
        "/enquiries",
        enquiryData
    );

    return response.data;
};