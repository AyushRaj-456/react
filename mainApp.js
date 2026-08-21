import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// core react
const heading = React.createElement("h1", {id:"heading1"}, "Rendered heading!");

// jsx syntax for react
const jsxHeading =( <h1 id="heading2">Heading written using jsx syntax in js</h1>);

// React functional component
const FunComponent = () => {
    return <div>This is a div written using react functional component.</div>
};
root.render(jsxHeading)

/*
const Temp = FunComponent
root.render(<temp/>); // this'll throw error
root.render(<Temp/>); // this will not throw any error
root.render(<FunComponent/>); // this is how we can render functional component using </>
*/


// lets put component inside a component

const Comp1 = () => {
    return <h1>This is component 1.</h1>
};

const Comp2 = () => {
    <Comp1/>

    return (<div>This is Component 2, and what you are reading 
        above this line, is nothing but NESTING of components</div>)
};
// nested components is also known as Component Composition!!
root.render(<Comp2/>);

//Can we put element inside a component ? Yes

let name = "abcd";
const Comp3 = () => {
    
    // to write js code inside a componenet we should use {}
    return (
        // <> </> is a react fragment 
        <>
            {name}
            <h3>{100 + 200}</h3>

            <h1>This is a component and it contains javascript or 
            react element</h1>
        
        </>  
    )
};

root.render(<Comp3/>);