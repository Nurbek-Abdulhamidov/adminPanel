import "./List.scss";
import Sidebar from "../../components/SideBar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
