import "./App.css";
import Clock from "./Clock";
// import Welcome from "./Welcome";
import Message from "./Message";

// function App() {
//   function formatName(userName){
//     return userName.toUpperCase();
//   }

//   function getGreeting(userName){
//     if(userName){
//       return <h1>Hello {formatName(userName)}!</h1>;
//     }
//     return <h1>Hello Stranger!!</h1>;
//   }
//   const name = 'John Smith';
//   const userImage = '/logo512.png'
//   const image = <img src={userImage} alt="logo" className="App-logo"/>
//   const element = (
//     <div className="container">
//       <div className="box">
//         <h1>Hello {formatName(name)}!</h1>
//         <p>Good To See You</p>
//         {image}
//       </div>
//     </div>
//   );
//   return element;
// }

// <Welcome name="Roshan" />
// <Message message="I am learning React With Basir" />
// {image}
function App() {
    const image = <img src="/logo192.png" alt="logo" className="App-logo" />;
    return (
        <div className="container">
            <div>
                <Message message="React Clock" />
                <Clock date={new Date()} />
                {image}
            </div>
        </div>
    );
}
export default App;
