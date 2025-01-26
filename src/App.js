import ScaleUI from './components/ScaleUI';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="beautiful-card">
        <div className="card-header">
          <h2>Welcome to the Beautiful World</h2>
        </div>
        <div className="card-content">
          <p>
            "The world is full of beauty, charm, and adventure. There's no end to
            the wonders you can discover."
          </p>
        </div>
        <div className="card-footer">
          <button className="cta-button">Explore More</button>
        </div>
      </div>
      <ScaleUI />
      <div className="beautiful-card2">
      <div className="card-header">
        <h2>The Adventure Awaits</h2>
      </div>
      <div className="card-content">
        <p>
          Step into a world of endless possibilities, where every corner hides
          a new discovery. Embrace the thrill of the unknown and let curiosity
          guide you.
        </p>
        <ul className="feature-list">
          <li>🌟 Explore breathtaking landscapes</li>
          <li>🚀 Unlock your hidden potential</li>
          <li>💡 Gain wisdom from every journey</li>
          <li>🌈 Discover beauty in the smallest details</li>
        </ul>
      </div>
      <div className="card-highlight">
        <h3>Did You Know?</h3>
        <p>
          The universe is estimated to have over 2 trillion galaxies. Each of
          these galaxies holds billions of stars, making our cosmos endlessly
          fascinating and mysterious!
        </p>
      </div>
      <div className="card-footer">
        <button className="cta-button">Start Your Journey</button>
      </div>
    </div>
    </div>
  );
}

export default App;
