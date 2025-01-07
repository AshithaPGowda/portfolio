const COLOURS = [];

COLOURS.TEXT_COLOUR_LIGHT = "#213555";  // Main text color for light mode
COLOURS.TEXT_COLOUR_DARK = "#FEF9F2";   // Main text color for dark mode

COLOURS.SPECIAL_TEXT_COLOUR_LIGHT = '#9268A5'; // Lighter accent color for light mode
COLOURS.SPECIAL_TEXT_COLOUR_DARK = '#67d6f3';  // Lighter accent color for dark mode

COLOURS.ICON_COLOUR_LIGHT = "#F3C623";  // Icon color for light mode
COLOURS.ICON_COLOUR_DARK = "#FEF9F2";   // Icon color for dark mode

COLOURS.BACKGROUND_LIGHT = '#FFFFFF';   // Light background color
COLOURS.BACKGROUND_DARK = '#000000';    // Dark background color

COLOURS.SECTION_COLOUR_DARK = '#222';  // Section background for dark mode
COLOURS.SECTION_COLOUR_LIGHT = '#f5f5f5'; // Section background for light mode

COLOURS.CARD_COLOUR_DARK = '#333';  // Card background for dark mode
COLOURS.CARD_COLOUR_LIGHT = '#fff'; // Card background for light mode

COLOURS.MENU_COLOURS_LIGHT = [
    "#CA3E6B", // Education (Adjusting based on timeline)
    "#FA8383", // Projects
    "#9DD3CC", // Work Experience
];
COLOURS.MENU_COLOURS_DARK = [
    "#00A9E0",  // Electric Blue (for Education)
    "#FFEA00",  // Bright Yellow (for Projects)
    "#FF6B6B",  // Soft Coral (for Work Experience)
];

COLOURS.TIMELINECOLOURS = [
    "#E91E63",  // Pinkish Red for Education (light mode)
    "#3F51B5",  // Indigo for Projects
    "#00BCD4",  // Cyan for Work Experience
    "#8BC34A",  // Light Green
    "#FFEB3B",  // Yellow for special section
];

// Define a matching text color for each timeline color
const getTextColorForTimeline = (timelineColor) => {
    const lightTextColors = {
        "#E91E63": "#C2185B",  // Light pinkish red text
        "#3F51B5": "#303F9F",  // Indigo text
        "#00BCD4": "#00838F",  // Cyan text
        "#8BC34A": "#388E3C",  // Green text
        "#FFEB3B": "#F57F17",  // Yellow text
    };

    const darkTextColors = {
        "#E91E63": "#F8BBD0",  // Light pinkish red text for dark mode
        "#3F51B5": "#C5CAE9",  // Light indigo text for dark mode
        "#00BCD4": "#80DEEA",  // Light cyan text for dark mode
        "#8BC34A": "#C8E6C9",  // Light green text for dark mode
        "#FFEB3B": "#FFF9C4",  // Light yellow text for dark mode
    };

    return { light: lightTextColors[timelineColor], dark: darkTextColors[timelineColor] };
};

// Apply the same light and dark adjustments for backgrounds
const getBackgroundColorForTimeline = (timelineColor) => {
    const lightBackgroundColors = {
        "#E91E63": "#FFEBEE",  // Light background for pinkish red
        "#3F51B5": "#E8EAF6",  // Light background for indigo
        "#00BCD4": "#E0F7FA",  // Light background for cyan
        "#8BC34A": "#E8F5E9",  // Light background for green
        "#FFEB3B": "#FFF9C4",  // Light background for yellow
    };

    const darkBackgroundColors = {
        "#E91E63": "#880E4F",  // Dark background for pinkish red
        "#3F51B5": "#1A237E",  // Dark background for indigo
        "#00BCD4": "#006064",  // Dark background for cyan
        "#8BC34A": "#1B5E20",  // Dark background for green
        "#FFEB3B": "#F57F17",  // Dark background for yellow
    };

    return { light: lightBackgroundColors[timelineColor], dark: darkBackgroundColors[timelineColor] };
};

// Example of usage
const timelineColor = "#E91E63";  // For example, using the pinkish red timeline
const backgroundColors = getBackgroundColorForTimeline(timelineColor);
const textColors = getTextColorForTimeline(timelineColor);

console.log('Background Color Light:', backgroundColors.light);  // Light background
console.log('Background Color Dark:', backgroundColors.dark);    // Dark background
console.log('Text Color Light:', textColors.light);  // Light text color
console.log('Text Color Dark:', textColors.dark);    // Dark text color

export default COLOURS;
