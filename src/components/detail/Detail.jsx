import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" className="" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" className="" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowDown.png" className="" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowUp.png" className="" alt="" />
          </div>

          <div className="photos">
            <div className="photoItem">
              <div className="phoneDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0NIG-KTyD0RJt4osQBrd4MdfzsKFcDEl6w&s"
                  alt=""
                />
                <span>Cosmic armor pic</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
            <div className="photoItem">
              <div className="phoneDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0NIG-KTyD0RJt4osQBrd4MdfzsKFcDEl6w&s"
                  alt=""
                />
                <span>Cosmic armor pic</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
            <div className="photoItem">
              <div className="phoneDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0NIG-KTyD0RJt4osQBrd4MdfzsKFcDEl6w&s"
                  alt=""
                />
                <span>Cosmic armor pic</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
            <div className="photoItem">
              <div className="phoneDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0NIG-KTyD0RJt4osQBrd4MdfzsKFcDEl6w&s"
                  alt=""
                />
                <span>Cosmic armor pic</span>
              </div>
              <img src="./download.png" className="icon" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" className="" alt="" />
          </div>
        </div>

        <button>Block user</button>
      </div>
    </div>
  );
};

export default Detail;
