import React from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';




export default function App() {
  return (
    <>
      <header>
        <h1>Кошелек</h1> 
        <h2>Калькулятор расходов</h2> 
      </header>

      <main>
        <div class="container">
          <Total/>
          <History/>
          <Operation/>
        </div>
      </main>
    </>
  );
}  