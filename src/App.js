import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import {modifyTaskName} from './ducks/reducer';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      taskList: [{
        task: 'pass assessment',
        description: 'meet all the requirements'
      }, 
      {
        task: 'finish portfolio',
        description: 'keep working hard'
      },
      {
        task: 'interview prep',
        description: 'learn coding vocab'
      }
    
    
    ]
    }
    currentTask: ''
    

  }

componentWillMount(){
  axios.get('https://practiceapi.devmountain.com/api/tasks')
}

  render() {

    
      return (
              <div>
      
               <input  onChange={(e) => this.props.e(e.target.value)}></input>
             
                
                <button>Task Description</button>
                <button>Save Changes</button>
                <button onChange={this.setState({currentTask: ''})}>Cancel Changes</button>
                <button>Delete Task</button>
                <button>Task Completed</button>

            </div>

      )
    })

    return (
      <div className="App">
        <h1>Task List</h1>

        {this.state.taskList ? tasks  : <button>Add task</button>}


       

      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    state
  }
}



export default connect(mapStateToProps, {modifyTaskName})(App);
