import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import React from "react";
import "./index.css";

addDecorator(story => (
    <ThemeProvider
        theme={{
            columns: 12,
            breakpoints: {
                small: 0,
                medium: 350,
                large: 700,
                xlarge: 1050
            },
            colors: {
                primary: "#252b33",
                accent: "#86c3c4",
                black: "#000000",
                white: "#ffffff",
                lightGray: "#ececec",
                mediumGray: "#d2d2d2",
                darkGray: "#464646",
                alert: "#f44336",
                warning: "#ff9800",
                success: "#4caf50",
                info: "#00bcd4"
            },
            radius: "0.1",
            padding: "1.2",
            margin: "1.2",
            inputHeight: "2",
            headings: "'Montserrat', sans-serif"
        }}
    >
        {story()}
    </ThemeProvider>
));

function loadStories() {
    const req = require.context("./components", true, /\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
