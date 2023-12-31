import "../styles/messagehistory.css"
import Topbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Mail from '../components/Mail';

const MessageService = () => {
  return (
    <div className="list">
      <Topbar/>
      <div className="listContainer">
        <Sidebar/>
        <Mail/>
      </div>
    </div>
  )
}

export default MessageService