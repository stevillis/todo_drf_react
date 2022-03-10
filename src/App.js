import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 class="text-center bg-info text-white rounded" id="pageTitle">To Do</h1>
        <div id="task-container" className="border-rounded">
          <div id="form-wrapper" className="border-rounded-top">
            <form id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input className="form-control" id="title" type="text" name="title" placeholder="Add task" />
                </div>
                <div style={{ flex: 1 }}>
                  <button id="submit" className="btn btn-outline-success" type="submit">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div id="list-wrapper" className='border-rounded-bottom'></div>
        </div>
      </div>
    );
  }
}

export default App;
