import React, { Component } from 'react';
import classes from './Layout.modules.css'
class Layout extends Component{
    render(){
        return(
            <div className={Layout}>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;