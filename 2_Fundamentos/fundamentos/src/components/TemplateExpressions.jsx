const TemplateExpressions = () => {

    const name = "Pedro";
    const data = {
        age: 21,
        job: "Developer",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem? </h1>
            <p>Minha profissão é {data.job} </p>
        </div>
    );
};

export default TemplateExpressions;