import React from 'react';
import {connect} from 'react-redux';
import Task from '../Task';

class TaskList extends React.Component{
    render(){
        return(
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {this.props.tasks.map((task,index)=><Task key={index} task={task} />)}
                    </tbody>
                </thead>
        )
    }
};

function mapStateToProps(state){
    return{
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);