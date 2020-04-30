import React from 'react';
import Header from './Components/Header';
import TaskBar from './Components/TaskBar';
import TaskList from './Components/TaskList';

class App extends React.Component{

    render(){
        return( 
          <div>
            <Header />
            <TaskBar />
            <TaskList />
          </div>
        )
    }
}


export default App;
