import React from 'react';
import LeftPanel from './components/left-panel';
import RightPanel from './components/right-panel';

function App() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <LeftPanel />
        <div className="hidden lg:block relative">
          <div className="fixed top-0 right-0 h-full w-1/2">
             <RightPanel />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
