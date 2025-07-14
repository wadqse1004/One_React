const Welcome = (props) => {
    return (
        props.isMember ? `${props.name}님 다시 오셨군요`
                       : `${props.name}님 가입하시겠어요?`
    )
}

export default Welcome;