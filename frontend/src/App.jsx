import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://localhost:5000')
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <h1>Secure Blog Frontend</h1>
    </div>
  );
}

export default App;

