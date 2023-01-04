function Btn() {
    const clickHandler = () => {
        console.log("clicked");
    }
    return (
        <button onClick={clickHandler}>Click me</button>
    );
}

export default Btn;


// function Btn() {
//     const mouseOverHandler = () => {
//         console.log("mouse overed");
//     }
//     return (
//         <button onMouseOver={mouseOverHandler}>Click me</button>
//     );
// }

// export default Btn;