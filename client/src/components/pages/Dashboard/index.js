import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

// Importing API calls
import API from 'utils/API';

// Importing components
import ColumnButtons from 'components/dumb/ColumnButtons';
import Navbar from 'components/dumb/Navbar';

// Importing Dashboard Pages
import Habit from 'components/pages/Dashboard/DashboardPages/Habit';
import Todo from 'components/pages/Dashboard/DashboardPages/Todo';

// Importing Component CSS
import './Dashboard.css';

class Dashboard extends Component{
    state = {
        redirect: false,
        username: "",
        uid: ""
    };

    componentDidMount(){
        const uid = localStorage.getItem("habit-uid");

        if(uid){
            console.log("Uid: " + uid);
            API.findUser({
                _id: uid
            })
            .then(res => {
                this.setState({
                    username: res.data.username,
                    uid: res.data._id
                }, function(){
                    console.log("User in state: ")
                    console.log(this.state.username);
                })
            })
        }
        else{
            console.log("User is not signed in");
            this.setState({
                redirect: true
            })
        }
    }

    renderPage = () => {
        if (this.props.match.params.page === "habits"){
            return <Habit uid={this.state.uid}/>
        }
        if (this.props.match.params.page === "todo"){
            return <Todo />
        }
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/signup" />;
        }

        return(
            <div className="grid">
                <Navbar username={this.state.username}/>
                <div className="nav-spacer"></div>
                <div className="left-panel">
                    <ColumnButtons />
                </div>
                <div className="page">
                    <div className="page-title">{this.props.match.params.page}</div>
                    <div className="page-content">
                       {this.renderPage()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;