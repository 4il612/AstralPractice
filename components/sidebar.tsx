import ModalForm from "./modalform"

const Sidebar = () =>
    <div className="sidebar">
        <div className="sidebar-header">
                <img src="https://cdn-icons.flaticon.com/png/512/2276/premium/2276931.png?token=exp=1657787162~hmac=a9602c951ec020223b4b1d57f2fac53b" alt="profile_picture"/>
                <h3>Cards service</h3>
                <p>with graphql</p>
        </div>
        <div className="sidebar-body">
                    <button onClick={() => document.getElementById('modal').style.display = 'block'} className="active">
                        добавить
                    </button>
        </div>
    </div>

export default Sidebar