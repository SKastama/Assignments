const Password = (props) => {
    return props.pw.split("").map((char) => {
        return <span>*</span>
    })
}

export default Password