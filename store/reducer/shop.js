import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    showFilters: false,
    brands: [
        {
            name: "Wholesale cannabis seed shop",
            motto: "Load up your box",
            logo: "",
            bgImageClass: "",
            introOne:
                "Welcome to the world's number one source for wholesale cannabis seeds. Vancoast Industries carries only the best seed brands ensuring you get the best quality cannabis genetics. From fresh, modern brands like Sonoma Seeds and global industry leaders like Crop King Seeds your bound to find dozens of strains that your customers have been looking for.",
            introTwo:
                "By partnering with Vancoast Indutries, you'll be able to buy wholesale cannabis seeds from a variety of brands all in the same order and ready to stock on your store shelves. With our simple re-ordering system and account dashboard, you'll have access to all the tools your need to always keep your store stocked."
        },
        {
            name: "Crop King Seeds",
            motto: "World class Cannabis Seeds",
            logo: "../static/img/assets/cks-logo.png",
            bgImageClass: "cks",
            introOne:
                "Crop King Seeds is one of the original seed companies dating back nearly a decade. While helping make cannabis legal in Canada they help serve the cannabis community by providing seeds to the world.From mixed bags, to high THC strains, to heavy indicas and CBD strains Crop King Seeds carries strains of every genre.",
            introTwo:
                "Based in Vancouver British Columbia, Crop King Seeds has over 35+ strains and is always adding more.They continue to be a leader in supplying cannabis seeds in North America and across the globe.Crop King Seeds is a recognizable brand that customers love."
        },
        {
            name: "Sunwest Genetics",
            motto: "From Our Garden to Yours",
            logo: "../static/img/assets/sunwest-logo.png",
            bgImageClass: "sunwest",
            introOne:
                "Sunwest Genetics specializes in preserving carefully selected genetics of particular cannabis seed strains. All seeds they carry have been feminized to ensure you grow plants producing flower. Sunwest also carries a few autoflower strains which makes the growing process even easier.",
            introTwo:
                "While they dont carry CBD strains like Sonoma and Crop King, Sunwest does have high THC strains, heavy indicas and strong sativas."
        },
        {
            name: "Sonoma Seeds",
            motto: "Grow Organically",
            logo: "../static/img/assets/sonoma-logo.png",
            bgImageClass: "sonoma",
            introOne:
                "Sonoma Seeds is a west coast cannabis seed company specializing in premium quality, hard to find seeds. Some of the most popular strains include OG Kush, Strawberry Cough, Super Silver Haze, Acapulco Gold and LA Confidential. Sonoma also carries CBD seeds. One in particular 'Cali Kush' is one of the most potent CBD strains on the market at a massive 20% CBD while retaining low levels of THC at 1%.",
            introTwo:
                "Other strains like OG Kush or Acapulco Gold are popular strains from decades ago that contain genetics from landrace strains that are very difficult to find in bud form let alone seeds. Be one of the first to offer the freshest designs and cannabis seeds in the industry."
        }
    ],
    activeBrandIndex: 0,
    showMobileMenu: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FILTERS:
            return updateObject(state, { showFilters: action.bool });
        case actionTypes.SET_BRAND_INDEX:
            return updateObject(state, { activeBrandIndex: action.index });
        case actionTypes.TOGGLE_MOBILE_MENU:
            return updateObject(state, { showMobileMenu: action.bool });
        default:
            return state;
    }
};
