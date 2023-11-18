import { useEffect, useState } from "react";

export default function NASA() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users/", {
            headers: {
                'accept' : 'application/json',
            },
            method: 'GET'
        }).then(res => {
            console.log(res);
            return res.json();
        })
            .then(json => {
                const products = [];
                console.log(json)
                json.forEach((elemento) => {
                    products.push(
                        <>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div>{elemento.id}</div>
                                <div>{elemento.title}</div>
                            </div>
                        </>
                    )
                })

                setProjects(products);
            })
            .catch(err => console.log(err));
    }, []);

    return (<>
        <div>Hola</div>
        <div>{projects}</div>
    </>)
}