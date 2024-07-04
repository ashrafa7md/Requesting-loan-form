export function Modal({ isVisible ,errorMsg=null}) {
    if (isVisible) {
        
        return (
            <div id="modal">
                <div id="modal-content">
                    <h1 style={errorMsg !== null ? {color:"red"} : {color:"green"}}>{errorMsg !== null ? errorMsg : "The Form Has Been Submitted Successfully"}</h1>    
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
}