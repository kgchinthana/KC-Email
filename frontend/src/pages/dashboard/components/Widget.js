import '../styles/widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case 'birthday':
      data = {
        title: 'Birthdays Today',
        isMoney: false,
        link: 'See all birthdays',
        icon: (
          <CakeOutlinedIcon
            className='icon'
            style={{
              color: 'crimson',
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
            }}
          />
        ),
      };
      break;
    case 'user':
      data = {
        title: 'Recepients',
        isMoney: false,
        link: 'View all recepients',
        icon: (
          <PersonOutlinedIcon
            className='icon'
            style={{
              backgroundColor: 'rgba(218, 165, 32, 0.2)',
              color: 'goldenrod',
            }}
          />
        ),
      };
      break;
    case 'count':
      data = {
        title: 'Messages Count',
        isMoney: false,
        link: 'View message count',
        icon: (
          <ChatBubbleOutlineOutlinedIcon
            className='icon'
            style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
          />
        ),
      };
      break;
    
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && '$'} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
