const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)

        console.log("Clicou");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    };

    return (
        <div>
            <div className="">
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={(e) => console.log("Clicou de novo")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;