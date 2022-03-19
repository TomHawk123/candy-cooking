//declaring the buyChocolate function
const buyChocolate = () => {
    // creating a candyObj object with a key-value pair
    const candyObj = {type: "Milk Chocolate"}
    //stopping the function and returning a value from within the function
    return candyObj
}

//assigned the candy variable the buyChocolate function.
let candy = buyChocolate() 

// declaring the addFlavoring function with anyParameter as the parameter
const addFlavoring = (anyParameter) => {
    //modifying/assigning the value of anyPararmeter preparing/staging 
    //a new key-value pair to be used on candyObj from buyChocolate function
    anyParameter.flavor = "Mint"

    return anyParameter
}

//Don't forget, candy is the object.
candy = addFlavoring(candy)
// console.log(candy)



// Define a function named makeBarkMixture. It should have one parameter 
//for an incoming object to be stored for use in the function.
const makeBarkMixture = (candyWithBarkObject) => {


// Time for another if block. This time, you will also need a 
//corresponding else block.
    if (candy.flavor === "Mint") {
    candyWithBarkObject.mixed === true
    } else {
        candyWithBarkObject.mixed === false
    }
    return candyWithBarkObject
}
// The function must verify that the right flavor is being used to 
//make the mixture. If the flavor property on the object is equal to 
//"Mint", then you should add a new mixed property to the object with 
//a value of true. If the flavor is not "Mint" then the property value 
//should be false.

candy = makeBarkMixture(candy)

console.log(candy)