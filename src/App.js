import logo from './logo.svg';
import './App.css';

function App() {


    return (
      <div class="wrapper">
      <img class="image"
  src="https://brand.psu.edu/images/backgrounds/atheltic-wrong.png"
  alt="Penn State Logo" width="400" height="225"/>

<div class="header">
  <h2>Penn State Football Nittany Lions</h2>
</div>
  <h3>Description</h3>
    <div class="description">
  <h5>Penn State Football, represented by the famous Nittany Lion logo, is a D1 football program located in State College, PA. Penn State football has won 2 national championships in program history and are predicted to make an apperance in playoffs in 2024. </h5>
</div>
<div class="btn-wrapper">
    <button onclick="hideDescription()">Details</button>
</div>
</div>
    );
  }

export default App;
