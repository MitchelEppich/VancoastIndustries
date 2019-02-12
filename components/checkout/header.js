const header = props => {
    let currentStep = props.checkout.currentStep;
    let headings = props.checkout.steps.map((name, index) => {
        let currentStepIndex = props.checkout.steps.indexOf(currentStep);
        let classStatus = currentStep == name ? "active cursor-pointer" : "";
        let pastStepStatus = index < currentStepIndex;
        return (
            <li
                onClick={() => {
                    pastStepStatus ? props.changeStep(name) : null;
                }}
                key={index}
                className={pastStepStatus ? "complete cursor-pointer" : classStatus}>
                <a>{name}</a>
            </li>
        );
    });
    return (
        <header>
            <h1>{props.title}</h1>
            <div className="vcProgressbar flex">
                <ul>{headings}</ul>
            </div>
        </header>
    );
};
export default header;
