import './UserCard.css';

const UserCard = ({ userName, setSelectedTimeFrame }) => {
  const handleClick = (e) => {
    const links = Array.from(document.querySelectorAll('.userCardLink'));
    links.map((link) => link.classList.remove('selected'));
    e.target.classList.add('selected');
    setSelectedTimeFrame(e.target.innerText.toLowerCase());
  };

  return (
    <>
      <div id="userCard">
        <div id="userCardForeground">
          <div id="userCardContent">
            <img src="../images/image-jeremy.png"></img>
            <div id="reportText">
              <p>Report for</p>
              <h1 id="userName">{userName}</h1>
            </div>
          </div>
        </div>
        <ul id="userCardLinks">
          <a>
            <li className="userCardLink" onClick={handleClick}>
              Daily
            </li>
          </a>
          <a>
            <li className="selected userCardLink" onClick={handleClick}>
              Weekly
            </li>
          </a>
          <a>
            <li className="userCardLink" onClick={handleClick}>
              Monthly
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default UserCard;
