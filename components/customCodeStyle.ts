import {theme} from "../tailwind.config";

const codeStyle = {
    "code[class*=\"language-\"]": {
        "color": theme.colors.yellow["600"],
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": theme.colors.yellow["600"],
        "fontFamily": theme.fontFamily.body,
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": theme.colors.gray,
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": theme.colors.gray,
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": theme.colors.yellow["300"]
    },
    "prolog": {
        "color": theme.colors.yellow["300"]
    },
    "doctype": {
        "color": theme.colors.yellow["300"]
    },
    "cdata": {
        "color": theme.colors.yellow["300"]
    },
    "punctuation": {
        "color": theme.colors.yellow["300"]
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": theme.colors.main["600"]
    },
    "keyword": {
        "color": theme.colors.main["600"]
    },
    "tag": {
        "color": theme.colors.main["600"]
    },
    "class-name": {
        "color": theme.colors.main,
        "textDecoration": "underline"
    },
    "boolean": {
        "color": theme.colors.green
    },
    "constant": {
        "color": theme.colors.green
    },
    "symbol": {
        "color": theme.colors.red["600"]
    },
    "deleted": {
        "color": theme.colors.red["600"]
    },
    "number": {
        "color": theme.colors.red["600"]
    },
    "selector": {
        "color": theme.colors.green
    },
    "attr-name": {
        "color": theme.colors.green
    },
    "string": {
        "color": theme.colors.green
    },
    "char": {
        "color": theme.colors.green
    },
    "builtin": {
        "color": theme.colors.green
    },
    "inserted": {
        "color": theme.colors.green
    },
    "variable": {
        "color": theme.colors.blue["300"]
    },
    "operator": {
        "color": theme.colors.blue["600"]
    },
    "entity": {
        "color": theme.colors.main,
        "cursor": "help"
    },
    "url": {
        "color": theme.colors.main["600"]
    },
    ".language-css .token.string": {
        "color": theme.colors.green
    },
    ".style .token.string": {
        "color": theme.colors.green
    },
    "atrule": {
        "color": theme.colors.yellow["300"]
    },
    "attr-value": {
        "color": theme.colors.yellow["300"]
    },
    "function": {
        "color": theme.colors.red["800"]
    },
    "regex": {
        "color": theme.colors.green
    },
    "important": {
        "color": theme.colors.red,
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

export default codeStyle;
