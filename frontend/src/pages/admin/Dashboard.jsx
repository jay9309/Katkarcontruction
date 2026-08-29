import { useAuth } from "../../context/AuthContext";


const Dashboard = () => {

    const { admin } = useAuth();


    return (

        <div>

            <h1>Admin Dashboard</h1>

            <h2>
                Welcome, {admin?.name}
            </h2>

            <div>

                <h3>Manage Projects</h3>

                <p>
                    Add, edit and delete construction projects.
                </p>

            </div>


            <div>

                <h3>Customer Enquiries</h3>

                <p>
                    View customer enquiries.
                </p>

            </div>

        </div>
    );
};


export default Dashboard;