const newUser = (context, user) => {
    const token = localStorage.getItem('token');
    axios.post('https://devinhouse-auth.herokuapp.com/api/v1/user', user, {
        headers: {
            authorization: token
        }
    })
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
};

const getUser = (context) => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    axios.get(`https://devinhouse-auth.herokuapp.com/api/v1/user/${id}`, {
        authorization: token
    }).then((response) => {
        context.state.user = response.data
    }).catch((err) => {
        console.log(err);
    })
}

export { newUser, getUser };