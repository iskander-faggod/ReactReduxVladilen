import React, { Component } from 'react';
import classes from './LayOut.module';
class Layout extends Component{
    render(){
        return(
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;