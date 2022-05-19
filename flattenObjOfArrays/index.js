const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],
    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],
    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */

function flattenObjectOfArrays(obj) {
    const retArr = [];
    // Object is key: array of objs
    for (const [_, v] of Object.entries(obj)) {
        console.log(v)
        if (v) {
            v.forEach(element => {
                let {id, type} = element
                retArr.push( {id, type})
            });
        }
    }
    // for (let key in obj) {
    //     if (obj[key].length > 0) {
    //         obj[key].forEach(element => {
    //             let {id, type} = element
    //             retArr.push( {id, type})
    //         });
    //     }
    // }
    return retArr
}

console.log(flattenObjectOfArrays(object1))