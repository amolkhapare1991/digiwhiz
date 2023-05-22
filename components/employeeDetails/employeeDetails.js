import styles from './EmployeeDetails.module.css'
import React, {useState, useEffect} from 'react'
export const EmployeeDetails = () => {
    const [empData, setEmpData] = useState([])

    useEffect(()=>{
        const getEmpData = async() =>{
            const res =await fetch('http://localhost:3000/api/employeeData')
            const empRes = await res.json()
            setEmpData(empRes)
        }
        getEmpData()
    },[])
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <caption>Employee Details</caption>
                <tbody>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Contact Details</th>
                        <th>Work Profile</th>
                    </tr>
                    {
                        empData.map((emp)=><tr key={emp?.code}>
                        <td>{emp?.code}</td>
                        <td>{emp?.name}</td>
                        <td>{emp?.designation}</td>
                        <td>{emp?.contact}</td>
                        <td>{emp?.profile}</td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>

    )
}