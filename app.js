import React from "react"
import ReactDOM from "react-dom"

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},

[React.createElement("div",{id:"child-1"},[React.createElement("h1",{id:"hi iam 1"},"Iam Child One"),React.createElement("h2",{id:"hi iam 2"},"vvvvvvvvvv")]),
React.createElement("div",{id:"child-1"},[React.createElement("h1",{id:"hi iam 1"},"Iam Child One"),React.createElement("h2",{id:"hi iam 2"},"Iam Child Two")])
]

)

root.render(parent);


