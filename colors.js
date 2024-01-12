// TODO: EASILY CONSOLE.LOG COLORS
// In destination .js file, simply >>> const colors = require("./colors.js");
// Then >>> console.log(RainbowText("Hello, World!"));

// Foreground (text) colors:
const CyanText = (text) => `\x1b[36m${text}\x1b[0m`;
const BlackText = (text) => `\x1b[30m${text}\x1b[0m`;
const GreenText = (text) => `\x1b[32m${text}\x1b[0m`;
const RedText = (text) => `\x1b[31m${text}\x1b[0m`;
const YellowText = (text) => `\x1b[33m${text}\x1b[0m`;
const BlueText = (text) => `\x1b[34m${text}\x1b[0m`;
const MagentaText = (text) => `\x1b[35m${text}\x1b[0m`;
const WhiteText = (text) => `\x1b[37m${text}\x1b[0m`;

// Bright foreground colors:
const BrightCyanText = (text) => `\x1b[96m${text}\x1b[0m`;
const BrightBlackText = (text) => `\x1b[90m${text}\x1b[0m`;
const BrightGreenText = (text) => `\x1b[92m${text}\x1b[0m`;
const BrightRedText = (text) => `\x1b[91m${text}\x1b[0m`;
const BrightYellowText = (text) => `\x1b[93m${text}\x1b[0m`;
const BrightBlueText = (text) => `\x1b[94m${text}\x1b[0m`;
const BrightMagentaText = (text) => `\x1b[95m${text}\x1b[0m`;
const BrightWhiteText = (text) => `\x1b[97m${text}\x1b[0m`;

// Background (text) colors:
const CyanBackground = (text) => `\x1b[46m${text}\x1b[0m`;
const BlackBackground = (text) => `\x1b[40m${text}\x1b[0m`;
const GreenBackground = (text) => `\x1b[42m${text}\x1b[0m`;
const RedBackground = (text) => `\x1b[41m${text}\x1b[0m`;
const YellowBackground = (text) => `\x1b[43m${text}\x1b[0m`;
const BlueBackground = (text) => `\x1b[44m${text}\x1b[0m`;
const MagentaBackground = (text) => `\x1b[45m${text}\x1b[0m`;
const WhiteBackground = (text) => `\x1b[47m${text}\x1b[0m`;

// Bright background colors:
const BrightCyanBackground = (text) => `\x1b[106m${text}\x1b[0m`;
const BrightBlackBackground = (text) => `\x1b[100m${text}\x1b[0m`;
const BrightGreenBackground = (text) => `\x1b[102m${text}\x1b[0m`;
const BrightRedBackground = (text) => `\x1b[101m${text}\x1b[0m`;
const BrightYellowBackground = (text) => `\x1b[103m${text}\x1b[0m`;
const BrightBlueBackground = (text) => `\x1b[104m${text}\x1b[0m`;
const BrightMagentaBackground = (text) => `\x1b[105m${text}\x1b[0m`;
const BrightWhiteBackground = (text) => `\x1b[107m${text}\x1b[0m`;

const RainbowText = (text) => {
  const colors = [
    "\x1b[31m", // Red
    "\x1b[33m", // Yellow
    "\x1b[32m", // Green
    "\x1b[36m", // Cyan
    "\x1b[34m", // Blue
    "\x1b[35m", // Magenta
  ];
  const reset = "\x1b[0m";
  let rainbowOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    rainbowOutput += color + text[i];
  }
  return rainbowOutput + reset;
};

const ChristmasText = (text) => {
  const colors = [
    "\x1b[31m", // Red
    "\x1b[37m", // White
    "\x1b[32m", // Green
  ];
  const reset = "\x1b[0m";
  let christmasOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    christmasOutput += color + text[i];
  }
  return christmasOutput + reset;
};

const IcyText = (text) => {
  const colors = [
    "\x1b[94m", // Bright Blue
    "\x1b[37m", // White
    "\x1b[96m", // Bright Cyan
  ];
  const reset = "\x1b[0m";
  let icyOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    icyOutput += color + text[i];
  }
  return icyOutput + reset;
};

const FieryText = (text) => {
  const colors = [
    "\x1b[91m", // Bright Red
    "\x1b[93m", // Bright Yellow
    "\x1b[37m", // White
  ];
  const reset = "\x1b[0m";
  let fieryOutput = "";
  for (let i = 0; i < text.length; i++) {
    const color = colors[i % colors.length];
    fieryOutput += color + text[i];
  }
  return fieryOutput + reset;
};

module.exports = {
  CyanText,
  BlackText,
  GreenText,
  RedText,
  YellowText,
  BlueText,
  MagentaText,
  WhiteText,
  BrightCyanText,
  BrightBlackText,
  BrightGreenText,
  BrightRedText,
  BrightYellowText,
  BrightBlueText,
  BrightMagentaText,
  BrightWhiteText,
  RainbowText,
  ChristmasText,
  IcyText,
  FieryText,
  CyanBackground,
  BlackBackground,
  GreenBackground,
  RedBackground,
  YellowBackground,
  BlueBackground,
  MagentaBackground,
  WhiteBackground,
  BrightCyanBackground,
  BrightBlackBackground,
  BrightGreenBackground,
  BrightRedBackground,
  BrightYellowBackground,
  BrightBlueBackground,
  BrightMagentaBackground,
  BrightWhiteBackground,
};
