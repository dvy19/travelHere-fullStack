
export const ENDPOINTS = {
    REGISTER:"api/accounts/register/",
    LOGIN:"api/accounts/login/",
    CREATEPROFILE:"api/accounts/create-profile/",

    GETCITY:"api/city/cities/",
    GETPLACES:"api/place/places/",
    SINGLEPLACE:(id)=>`api/place/places/${id}/`,

    ALLREVIEW:"api/place/reviews/",
    SAVEDPLACES:"api/place/saved-places/",

    FEELINGSPLACES:"api/place/recommend/",

    SINGLECITY:(id)=>`api/city/cities/${id}/`,


    
};
