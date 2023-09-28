import "../styles/featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Progress of Message Service</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={100} text={"100%"} strokeWidth={5} />
        </div>
        <p className="title">Total sent messages today</p>
        <p className="amount">56</p>
        <p className="desc">
          Previous Progress. 
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <div className="resultAmount">452</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">1985</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last 3 Month</div>
            <div className="itemResult positive">
              <div className="resultAmount">3205</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;