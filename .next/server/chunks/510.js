"use strict";
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@chakra-ui/core"
var core_ = __webpack_require__(532);
// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__(664);
;// CONCATENATED MODULE: ./styles/theme.ts

const breakpoints = [
    "360px",
    "768px",
    "1024px",
    "1440px"
];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];
const customTheme = {
    ...core_.theme,
    fonts: {
        body: "Mukta, sans-serif",
        heading: "Mukta, sans-serif",
        mono: "Mukta, sans-serif"
    },
    fontWeights: {
        ...core_.theme.fontWeights,
        normal: 400,
        medium: 500,
        bold: 700,
        extrabold: 800
    },
    radii: {
        ...core_.theme.radii,
        sm: "4px"
    },
    fontSizes: {
        ...core_.theme.fontSizes,
        "5xl": "40px",
        "6xl": "60px"
    },
    colors: {
        ...core_.theme.colors,
        orange: {
            ...core_.theme.colors.orange,
            500: "#FBA442"
        }
    },
    breakpoints
};
/* harmony default export */ const theme = (customTheme);

;// CONCATENATED MODULE: ./context/theme/ThemeContainer.tsx





const ThemeContainer = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(core_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime.jsx(core_.ColorModeProvider, {
            value: "light",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_emotion_theming_.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(core_.CSSReset, {}),
                    children
                ]
            })
        })
    });
};
/* harmony default export */ const theme_ThemeContainer = (ThemeContainer);

;// CONCATENATED MODULE: ./pages/_app.tsx




const MyApp = ({ Component, pageProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "The BarCodeStudio"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Interior home design project made using Next.js and Chakra UI"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(theme_ThemeContainer, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ })

};
;