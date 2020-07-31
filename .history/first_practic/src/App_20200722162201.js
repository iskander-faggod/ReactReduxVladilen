import React from 'react';
import Layout from './hoc/LayOut/LayOut';


function App() {
  return (
    <div className="App">
      <Layout>
          <div style={{width:400,border:'1px solid black'}}>
            <h1>LayOut</h1>
          </div>
      </Layout>
    </div>
  );
}

export default App;
