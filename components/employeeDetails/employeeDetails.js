import styles from './EmployeeDetails.module.css'
import React, { useState, useEffect } from 'react'
export const EmployeeDetails = () => {
    const [empData, setEmpData] = useState([])

    useEffect(() => {
        const getEmpData = async () => {
            const res = await fetch('https://digiwhiz.vercel.app/api/employeeData')
            const empRes = await res.json()
            setEmpData(empRes)
        }
        getEmpData()
    }, [])

    return (
        <>
            <h3 className={styles.tableHeading}>Employee Details</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Contact Details</th>
                            <th>Work Profile</th>
                        </tr>
                        {
                            empData.map((emp) => <tr key={emp?.code}>
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
        </>

    )
}