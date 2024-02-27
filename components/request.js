export default function requestToNode(label) {

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(label),
        };
        
    return (
        fetch("http://localhost:1880/endpoint", requestOptions).then((response) =>
        response.json()
        )
    );
};
