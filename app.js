/* 
const heading = React.createElement("h1",{id:"name"},"Hello vasanth Welcome to React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(root);

//creating nested divs

const parent = 
React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"child"},"Iam an H1 CHILD"),React.createElement("h1",{id:"child"},"Iam an H1 CHILD")]
));

root.render(parent);

//while writing more sibling use [] array in the third parameter */

/*
<div id = "parent">
    <div id = "child1">
        <h1>Iam a H1</h1>
        <h1>Iam a H2</h2>
    </div>

    <div id = "child2">
        <h1>Iam a H1</h1>
        <h2>Iam a H2
    </div>
</div>
*/ 

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div",{id:"parent"},

[React.createElement("div",{id:"child-1"},[React.createElement("h1",{id:"hi iam 1"},"Iam Child One"),React.createElement("h2",{id:"hi iam 2"},"Iam Child Two")]),
React.createElement("div",{id:"child-1"},[React.createElement("h1",{id:"hi iam 1"},"Iam Child One"),React.createElement("h2",{id:"hi iam 2"},"Iam Child Two")])
]

)

root.render(parent);

console.log("vasanth");
