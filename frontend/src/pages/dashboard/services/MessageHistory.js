import "../styles/messagehistory.css"
import Topbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Datatable from '../components/Datatable';

const MessageHistory = () => {
  return (
    <div className="list">
      <Topbar/>
      <div className="listContainer">
        <Sidebar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default MessageHistory