const colors = require("./colors");

const testPrint = () => {
  const colorFunctions = {};

  // Iterate over the functions in the module
  for (const functionName in colors) {
    const functionValue = colors[functionName];

    // Check if it's a function
    if (typeof functionValue === "function") {
      // Add the function to the colorFunctions object
      colorFunctions[functionName] = functionValue;
    }
  }

  // Now you can use colorFunctions in the loop
  for (const [colorName, colorFunction] of Object.entries(colorFunctions)) {
    const coloredText = colorFunction(colorName);
    console.log(coloredText);
  }
};

testPrint();

module.exports = { testPrint };
