React.createElement(
    "html",
    { lang: "" },
    React.createElement(
        "head",
        null,
        React.createElement(
            "title",
            null,
            "My website example"
        )
    ),
    React.createElement(
        "body",
        null,
        React.createElement(
            "h1",
            null,
            "My website example"
        ),
        React.createElement(
            "p",
            null,
            "This is the first comment.",
            React.createElement("div", { "class": "like_button_container", "data-commentid": "1" })
        ),
        React.createElement(
            "p",
            null,
            "This is the second comment.",
            React.createElement("div", { "class": "like_button_container", "data-commentid": "2" })
        ),
        React.createElement(
            "p",
            null,
            "This is the third comment.",
            React.createElement("div", { "class": "like_button_container", "data-commentid": "3" })
        ),
        React.createElement("script", { src: "https://unpkg.com/react@18/umd/react.development.js", crossorigin: true }),
        React.createElement("script", { src: "https://unpkg.com/react-dom@18/umd/react-dom.development.js", crossorigin: true }),
        React.createElement("script", { src: "like_button.js" })
    )
);