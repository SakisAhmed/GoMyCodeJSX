import eau from './eau.jpg';
import './style.css';

function App() {
  return (
    <div className="App">
          <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
              <h1 className="title red">Sakis</h1> <br/>         
            <img src={eau} alt="eau"/><br/>          
            <img src="/nature.jpg " alt ="nature"/>
          </div>
          <iframe width="320" height="240" controls title="video" src="/video.mp4" type="video/mp4">
          </iframe>
    </div>
  );
}

export default App;
