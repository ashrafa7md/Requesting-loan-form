import { useState } from 'react'
import './MyForm.css'
import { Modal } from './Modal'
export function MyForm() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [showModel, setShowModel] = useState(false);
    const [loanForm, setLoanForm] = useState({
        name: "",
        phone: "",
        age: "",
        employee: false,
        salary:"",
    })
    const btnDisabled = loanForm.name === "" || loanForm.phone === "" || loanForm.age === "";
    function HandelDiv() {
        if (showModel === true) {
            setShowModel(false);
        }
    }
    function HandelBtnClick(e) {
                e.preventDefault()
        console.log(loanForm)
        setErrorMsg(null);
        const { age, phone } = loanForm;
        if (age < 18 || age > 100) {
            setErrorMsg("This age not allowed")
        } else if (phone.length < 10 || phone.length > 12) {
            setErrorMsg("this phone not formatted")
        }
        setShowModel(true)
    }
    return <div
        onClick={HandelDiv}
        style={{ display: "flex", flexDirection: "column", width: "50%", justifyContent: "center", alignItems: "center" }}>
    <form>
        <h1>Requesting a loan</h1>
        <hr />
        <label>Name</label>
            <input type='text' value={loanForm.name} onChange={(e) => {
                setLoanForm({...loanForm, name: e.target.value})
        }}/>
        <label>Phone Number</label>
        <input type='number' value={loanForm.phone} onChange={(e) => {
                setLoanForm({...loanForm, phone: e.target.value})
        }}/>
        <label>Age</label>
        <input type='number' value={loanForm.age} onChange={(e) => {
                setLoanForm({...loanForm, age: e.target.value})
        }}/>
        
        <label>Are you an employee</label>
            <input type='checkbox' checked={loanForm.employee} onChange={(e) => {
                setLoanForm({...loanForm, employee: e.target.checked})
            }}/>
        
        <label>Salary</label>
            <select value={loanForm.salary} onChange={(e) => {
                setLoanForm({ ...loanForm, salary: e.target.value })
        }}>
            <option>less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>more than 2000$</option>
        </select>
            <button style={btnDisabled ? { background: "gray" } : { background: "rgb(211,0,127)" }} onClick={HandelBtnClick} disabled={btnDisabled}>Submit</button>
    </form>
        <Modal isVisible={showModel} errorMsg={errorMsg}/>
    </div>
}