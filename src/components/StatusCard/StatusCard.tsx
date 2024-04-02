import { ApiResponse } from "../../App";
import "./styles.css";

interface Props {
  status: ApiResponse;
}

const StatusCard = ({ status }: Props) => {
  const { name, message, hostname, success } = status;
  return (
    <div className="cardContainer">
      <div className="cardName">
        <div className={`circle ${success ? "healthyBg" : "outageBg"}`}></div>
        <span>{name}</span>
      </div>
      <div>
        <span>{hostname}</span>
      </div>
      <div>
        <span className={success ? "healthy" : "outage"}>{message}</span>
      </div>
    </div>
  );
};

export default StatusCard;
