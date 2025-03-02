import { FONT_FAMILY } from "@core/constant";

const getTitle = (title?: string, description?: string) => ({
  textStyle: {
    fontFamily: FONT_FAMILY,
  },
  title: {
    text: title,
    subtext: description,
    left: "left",
    textStyle: {
      color: "#000000E0",
    },
  },
});

const getResponsiveLegend = () => ({
  legend: {
    type: "scroll", // Enable scrolling for many items
    orient: "horizontal" as any, // Default orientation
    bottom: -5,
    left: "center",
    textStyle: {
      fontFamily: FONT_FAMILY,
    },
    // Important for responsiveness:
    formatter: function (name: string) {
      // Shorten long names on small screens
      const screenWidth = window.innerWidth;
      if (screenWidth < 500 && name.length > 8) {
        return name.substring(0, 7) + "...";
      }
      return name;
    },
    // Legend selection styling
    selectedMode: true,
    inactiveColor: "#ccc",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 5,
    padding: [5, 10],
  },
});

export const chartUtils = {
  getTitle,
  getResponsiveLegend,
};
