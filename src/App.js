import "./App.css";

import Profile from "./profile/Profile";
import Photo from "./profile/Photo";
import Cover from "./profile/Cover";

function App() {
  const handleName = (fullName) => alert(`You following ${fullName}!`);
  return (
    <div className="App">
      <Cover />
      <Profile
        fullName="Moez Khmissi"
        profession="Student"
        bio="Hello, I am a master's student in civil engineering. Also, I am learning software development following my passion. I am glad you visited my profile."
        handleName={handleName}
      >
        <Photo />
      </Profile>
    </div>
  );
}

export default App;
