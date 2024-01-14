# jbassard97nodecolors

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)
- [Screenshots](#screenshots)

## Description

Easily apply ANSI escape codes to colorize your text, it's background, or both at the same time! The entire rainbow is at your disposal. There are a total of 58 easy-to-use functions included in this npm module to let your creativity fly, and 2 test print functions so you can see the project's true colors in an instant. Most styles are nestable. This project allows for the full conversion of:

    CSS color keywords to ANSI,
    RGB values to ANSI,
    and 4 or 7 digit HEXIDECIMAL color to ANSI

Give your eyes the treat they deserve, here's how:

## Installation

Install the npm package! In your root directory of your project, enter 'npm install jbassard97nodecolors'. To stay current with the most recent pushes, enter 'npm install jbassard97nodecolors@latest'. And that's it! 'jbassard97nodecolors' is a remarkably lightweight dependency to have and does a lot.

## Usage

Link to npm package: https://www.npmjs.com/package/jbassard97nodecolors

Link to GitHub repo: https://github.com/JBassard97/nodeColors

These functions can be broken down into 6 groups of thought:

- [Basic Colors](#Basic)
- [Patterns](#Patterns)
- [Styles](#Styles)
- [CSS coloring](#CSS)
- [RGB coloring](#RGB)
- [HEX coloring](#HEX)
- [Test Prints!](#TestPrint)

## Basic

In any ANSI-compatible terminal, the standard output colors are represented as 8 basic colors and 8 high-intensity colors. These are black, red, green, yellow, blue, magenta, cyan, and white. As a bonus, I found it disappointing that orange wasn't an OG color, so functions for that hue are included. Additionally, we need to understand that the text color (foreground) and background color can be styled separately. This gives us 36 functions to perform all of the most STANDARD output colors. They all only take in one string of text exactly and are called like this:

    // Foreground (text) colors:
    const CyanText = (text) => `\x1b[36m${text}\x1b[0m`;

    // Bright foreground colors:
    const BrightCyanText = (text) => `\x1b[96m${text}\x1b[0m`;

    // Background colors:
    const CyanBackground = (text) => `\x1b[46m${text}\x1b[0m`;

    // Bright background colors:
    const BrightCyanBackground = (text) => `\x1b[106m${text}\x1b[0m`;

## Patterns

These functions take in a string of text, loops through it, and applies a colored pattern to its output. These include: RainbowText(), ZebraText(), FieryText(), IcyText(), and for that time of the year - ChristmasText().

## Styles

These 9 functions take in a string of text, and returns the text with the ANSI codes on either side to define a style. These styles are standard for CLI and include: ItalicText(), BoldText(), UnderlineText(), DoubleUnderlineText,(), OverlineText(), InverseColors(), FaintText(), Hidden(), and CrossedOut().

## CSS

These functions are the stars of the show in my opinion. These 2 functions each take in a string of text, and a string containing a valid CSS color keyword (like "AliceBlue", is case insensitive!), and output your text in the color you requested. If you tried to use a nonexistent color or spelled it wrong, it'll notify you of the mismatch and return the original text. These functions are simply named: CSSkeywordText() and CSSkeywordBackground().

## RGB

These 3 functions can colorize text by the given RGB values. They take in a string of text, and 3 integers (R, G, B).

## HEX

These 2 functions can colorize text by the given HEX color code. These codes can be either 4 or 7 characters long, and should start with '#' These functions are simply named: HexColorText() and HexColorBackground().

## TestPrint

Included are 2 functions that can be used to visualize all hues and intensities possible. Calling the function 'testPrint();' by itself will console.log a sample of all of the functions regarding basic colors, patterns, and styles. Calling the function 'CSSkeywordTestPrint();' by itself will console.log every CSS color keyword, demonstrating its ability to show in the foreground and background of the output. This test print is particularly beautiful.

## License

ISC

## Contributors

## Questions

- With the ability to infinitely alter the hues of the output in our terminals, can this create intricate terminal art?
- Someone PLEASE try making pixel art on my behalf. It'd make me cry with joy.

## Screenshots
