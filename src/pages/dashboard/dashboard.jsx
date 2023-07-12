import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import  "./dashboard.css"

//Components
import DashboardNav from '../../components/dashboardNav/dashboardNav'
import CreatePost from "../../components/createPost/createPost"
import CreateAirdrop from "../../components/createAirdrop/createAirdrop"

const Dashboard = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);
    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setIsLoggedin(true);
    }
    }, []);
    
    const navigate = useNavigate();

    function logOut() {
        setIsLoggedin(false);
        localStorage.removeItem("authenticated");
        navigate(`/`);
    }

    if (isLoggedin===false) {
        return <div className="dashboard-unknown">
                    <p>Non authentifié</p>
                    <br />
                    <br />
                    <p>Accéder à la page d'identification</p>
                    <br />
                    <div><NavLink to ="/sdfghjklm0987654321">S'identifier</NavLink></div>
                </div>
    } else {

    return (
        <div className="container">
            <DashboardNav />
            <button onClick={logOut} className="close-session-btn">Close Session</button>
            <div className="dashboard-container">
                <div className="dashboard-left"><CreateAirdrop /></div>
                <div className="dashboard-left"><CreatePost /></div>
            </div>

        </div>
    )
    }

}

export default Dashboard