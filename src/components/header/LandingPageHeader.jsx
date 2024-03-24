import './LandingPageHeader.css'
import { Components } from 'react'
import { Logo } from './logo'


export const LandingPageHeader = () =>{
return(
    <header className="header">
      <div className="target">
      <div className="logo">
        <Logo/>
      </div>
         <div className="menu">
          <ul>
            <li>
            <a href="#premium">Premium</a>
            </li>
            <li>
              <a href="#Support">Support</a>
              </li>
            <li>
              <a href="#/download">Download</a>
              </li>
            <li>|</li>
            <li className="active">
              <a href="#/sign up">Sign up</a>
              </li>
            <li className="active">
              <a href='#/Log in'>Log in</a>
              </li>
           </ul>
         </div>
         </div>
    </header>)
}





/*class LandingPageHeaderComponent extends Component{
    render(){
        return(
            <header className="header">
        <div className="logo">Logo</div>
        <div className="menu"> Menu
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>Sign up</li>
            <li>Log in</li>
            </div>
            </header>)
    }
    
}*/