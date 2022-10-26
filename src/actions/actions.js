import axios from 'axios';
const increment = () => {
    return {
        type: "INCREMENT"
    }
}
const decrement = () => {
    return {
        type: "DECREMENT"
    }
}
const login = (isAuthenticated) => {
    return {
        type: "LOGIN",
        isAuthenticated
    }
}
const loginValidate = (data) => {
    return dispatch => {
        axios.get('http://localhost:4000/users')
            .then((res) => {
                let value = res.data
                var result = value.find(val => val.username === data.username && val.password === data.password)
                if (result) {
                    dispatch(login(true))
                }
                else {
                    dispatch(login(false))
                }
            })
    }
}
export { increment, decrement, login, loginValidate }
