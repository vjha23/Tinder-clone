import React from 'react'
import Header from './Header';
import Tindercards from './Tindercards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      { /**header */}
      <Header />
      { /**tinder card */}
      <Tindercards />
      { /**tinder button */}
      <SwipeButtons />
    </div>
  );
}

export default App;
