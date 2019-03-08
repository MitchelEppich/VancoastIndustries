import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentStep: "Cart",
  steps: ["Cart", "Shipping", "Billing", "Payment", "Confirmation"],
  cart: {
    discount: 0,
    items: {
      BBR5: {
        amount: "10",
        per: 95,
        price: 95,
        product: {
          company: ["sunwest genetics"],
          price: [-1, 100, 200],
          effect: [],
          yield: [100, 250],
          flowerTime: [9],
          relations: [],
          pThc: [10.85, 24],
          pCbd: [0.1, 0.9],
          pCbn: [0.3, 4.2],
          country: [2, 3],
          name: "Purple Kush",
          description:
            "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
          genetic: 5,
          difficulty: 0,
          indica: 0.7,
          sativa: 0.3,
          ruderalis: 0,
          type: 1,
          environment: 0,
          sotiId: "AFM",
          sttId: "54",
          releaseDate: "2018-06-01T07:00:00.000Z",
          isFeatured: false,
          packagePath: "../static/img/products/sunwest/sw-purple-kush.png"
        },
        quantity: 1,
        sale: undefined
      },
      BBR6: {
        amount: "25",
        per: 200,
        price: 800,
        product: {
          company: ["sunwest genetics"],
          price: [-1, 100, 200],
          effect: [],
          yield: [100, 250],
          flowerTime: [9],
          relations: [],
          pThc: [10.85, 24],
          pCbd: [0.1, 0.9],
          pCbn: [0.3, 4.2],
          country: [2, 3],
          name: "Master Kush",
          description:
            "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
          genetic: 5,
          difficulty: 0,
          indica: 0.7,
          sativa: 0.3,
          ruderalis: 0,
          type: 1,
          environment: 0,
          sotiId: "AFM",
          sttId: "54",
          releaseDate: "2018-06-01T07:00:00.000Z",
          isFeatured: false,
          packagePath: "../static/img/products/sunwest/sw-master-kush.png"
        },
        quantity: 4,
        sale: undefined
      },
      BBR7: {
        amount: "5",
        per: 35,
        price: 35,
        product: {
          company: ["sonoma seeds"],
          price: [-1, 100, 200],
          effect: [],
          yield: [100, 250],
          flowerTime: [9],
          relations: [],
          pThc: [10.85, 24],
          pCbd: [0.1, 0.9],
          pCbn: [0.3, 4.2],
          country: [2, 3],
          name: "Cali Kush",
          description:
            "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
          genetic: 5,
          difficulty: 0,
          indica: 0.7,
          sativa: 0.3,
          ruderalis: 0,
          type: 1,
          environment: 0,
          sotiId: "AFM",
          sttId: "54",
          releaseDate: "2018-06-01T07:00:00.000Z",
          isFeatured: false,
          packagePath: "../static/img/products/sonoma/so-cali-kush.jpg"
        },
        quantity: 1,
        sale: undefined
      },
      BBR8: {
        amount: "5",
        per: 35,
        price: 35,
        product: {
          company: ["crop king seeds"],
          price: [-1, 100, 200],
          effect: [],
          yield: [100, 250],
          flowerTime: [9],
          relations: [],
          pThc: [10.85, 24],
          pCbd: [0.1, 0.9],
          pCbn: [0.3, 4.2],
          country: [2, 3],
          name: "Early Miss",
          description:
            "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
          genetic: 5,
          difficulty: 0,
          indica: 0.7,
          sativa: 0.3,
          ruderalis: 0,
          type: 1,
          environment: 0,
          sotiId: "AFM",
          sttId: "54",
          releaseDate: "2018-06-01T07:00:00.000Z",
          isFeatured: false,
          packagePath: "../static/img/products/cks/cks-early-miss.png"
        },
        quantity: 1,
        sale: undefined
      },
      BBR9: {
        amount: "5",
        per: 35,
        price: 35,
        product: {
          company: ["crop king seeds"],
          price: [-1, 100, 200],
          effect: [],
          yield: [100, 250],
          flowerTime: [9],
          relations: [],
          pThc: [10.85, 24],
          pCbd: [0.1, 0.9],
          pCbn: [0.3, 4.2],
          country: [2, 3],
          name: "Early Miss",
          description:
            "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
          genetic: 5,
          difficulty: 0,
          indica: 0.7,
          sativa: 0.3,
          ruderalis: 0,
          type: 1,
          environment: 0,
          sotiId: "AFM",
          sttId: "54",
          releaseDate: "2018-06-01T07:00:00.000Z",
          isFeatured: false,
          packagePath: "../static/img/products/cks/cks-early-miss.png"
        },
        quantity: 1,
        sale: undefined
      }
    },
    maxPerPackage: 500,
    potentialQuantity: 1,
    price: 965
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STEP:
      return updateObject(state, { currentStep: action.step });
    default:
      return state;
  }
};
