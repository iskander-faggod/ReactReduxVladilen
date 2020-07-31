import React, { Component } from 'react';
import classes from'./Layout.module.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
class Layout extends Component{
    toggleMenuHandler=()=>{
        this.setState({
            menu:!this.state.menu
        })
    }
    render(){
        return(
            
            <div className={classes.Layout}>
                <MenuToggle
                onToggle={this.toggleMenuHandler}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout;