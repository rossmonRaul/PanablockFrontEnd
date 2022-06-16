

export const GetApi = async (url) => {
    //const { token } = ObtenerTokenUsuario();

    const myInit = {
        method: 'GET',
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            //'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        cache: 'default'
    };
    const myRequest = new Request(url, myInit);

    const response = await fetch(myRequest);
    let datos;
    if (response.status == 200) {
        datos = await response.json();
    } else {
        console.log(response)
    }
    return datos;
}

export const PostApi = async (url, data) => {
    //const { token } = ObtenerTokenUsuario();

    const myInit = {
        method: 'POST',
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            //'Authorization': `Bearer ${token}`
        },
        mode: 'cors',
        cache: 'default',
        body: data
    };
    const myRequest = new Request(url, myInit);

    const response = await fetch(myRequest);
    let datos;
    if (response.status == 200) {
        datos = await response.json();
    } else {
        console.log(response)
    }
    return datos;
}