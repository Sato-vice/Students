import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa"

const DriverInfo = ({ driver }) => {
    return (
        <div className="p-2 mb-2 border border-3 rounded border-secondary width">
            <h4>Drivers Information:</h4>
            <ul className="list-group-flush gap-2 d-flex flex-column">
                <li className="list-group-item fw-bolder">
                    <FaUser className="icon margin-right"/>
                    {driver.name}
                </li>
                <li className="list-group-item fw-bolder">
                    <FaEnvelope className="icon margin-right"/>
                    {driver.email}
                </li>
                <li className="list-group-item fw-bolder">
                    <FaPhone className="icon margin-right"/>
                    {driver.phone}
                </li>
            </ul>
        </div>
    )
}

export default DriverInfo