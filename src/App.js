import './App.css';

function App() {
  return (
    <div className="App">
        <p className="brand animate__animated animate__bounce animate__infinite">AHIBO</p>
        <p className="message animate__animated animate__heartBeat">We're coming soon..</p>
        <div className="form_container">
        <form>
            <p className="notif_msg">Get notified when we're ready</p>
        <input className="input" type="text" placeholder="Enter your e-mail"/>
        <button className="notify_btn">Subscribe</button>
        </form>
    </div>
    </div>
  );
}

export default App;
