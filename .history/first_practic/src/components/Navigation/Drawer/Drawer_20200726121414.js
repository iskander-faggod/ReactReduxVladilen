import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/backdrop/backdrop'
import { NavLink } from 'react-router-dom'

const links = [
  {to:'/',label:'Список',exact:true},
  {to:'/auth',label:'Авторизация',exact:false},
  {to:'/quiz-creator',label:'Создать тест',exact:false}
]

class Drawer extends Component {

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
          to={link.to}
          exact={link.exact}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          { this.renderLinks() }
        </ul>
      </nav>
      {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/>:null}
    </>
    )
  }
}

export default Drawer