import './TimeCard.css';

const TimeCard = ({ id, title, timeData, selectedTimeFrame }) => {
  const renderPreviousTimeText = (timeframe) => {
    if (timeData) {
      switch (timeframe) {
        case 'daily':
          return `Yesterday - ${timeData.timeframes.daily.previous}hrs`;
        case 'weekly':
          return `Last Week - ${timeData.timeframes.weekly.previous}hrs`;
        case 'monthly':
          return `Last Month - ${timeData.timeframes.monthly.previous}hrs`;
        default:
          break;
      }
    }
  };

  return (
    <>
      <div id={id} className="infoCard">
        <div className={`${id}Background background`}>
          <div className={`${id}BackgroundImage backgroundImage`}>
            <div className="infoCardForeground">
              <div className="timeCardContent">
                <div className="timeCardHeader">
                  <h2 className="titleText">{title}</h2>
                  <img
                    src="../images/icon-ellipsis.svg"
                    className="timeCardIcon"
                  ></img>
                </div>
                <div className="timeTextDiv">
                  <p className="timeText">
                    {timeData.timeframes[selectedTimeFrame].current}hrs
                  </p>
                  <p className="timeFrameText">
                    {renderPreviousTimeText(selectedTimeFrame)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeCard;
