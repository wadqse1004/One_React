const Button = ({children, text, color = "black"}) => {
    const onClickButton = (e) => {
        console.log(e)
        console.log(text);
    }

    return (
    <button 
    onClick={onClickButton}
    //onMouseEnter={onClickButton}
    style={{color : color}}>
            {text} - {color.toUpperCase()}
            {children}
    </button>
    )
}

//Button.defaultPros = {
//    color: "black"
//}

export default Button;