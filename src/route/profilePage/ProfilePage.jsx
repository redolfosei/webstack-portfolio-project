import List from "../../components/list/List"
import "./profilePage.scss"

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avata:
              <img
                src="https://media.licdn.com/dms/image/D4E03AQFIr0pmhfMyuw/profile-displayphoto-shrink_800_800/0/1683710898586?e=1723075200&v=beta&t=xUyQmRzKiYvcbik29N-VxH_YTocRnz95aW5EOs30EC4"
                alt=""
              />
            </span>
            <span>
              Username: <b>Redolf Osei</b>
            </span>
            <span>
              Email: <b>redolf639@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default ProfilePage
