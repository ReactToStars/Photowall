import React, { Component} from "react";
import {Link} from "react-router-dom";
import { PhotoWall } from "./PhotoWall";
import {Route} from 'react-router-dom'
import { AddPhoto } from "./AddPhoto";
import {Title} from './Title'
import {Single} from './Single'

class Main extends Component{

    state = {loading: true}

    componentDidMount(){
        this.props.startLoadingPost().then(() => {
            this.setState({loading : false})
        })
        this.props.startLoadingComments()
    }

    render(){
        return (
        <div>
            <h1>
                <Link to='/'><Title title = "Photowall"/></Link>
            </h1>
            <div>
                <Route exact path="/" render = {() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>
                
                <Route path="/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props} onHistory = {history}/> 
                )}/>

                <Route path="/single/:id" render = {(params) =>(
                    <Single loading={this.state.loading} {...this.props} {...params}/>
                )} />
            </div>
        </div>
        )
    }
}

export default Main