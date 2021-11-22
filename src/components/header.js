const header = (props) => {

   const showLogin=() => {
      props.setShowLogin(true)
   }

   const showRegister=() => {
      props.setShowRegister(true)
   }

  return(
    <div className='nav'>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='guidesLink'>
                    <a className='nav-button nav-button-1' href='#'>Guides</a>
                </div>
                <div className='addGuideLink'>
                    <a className='nav-button nav-button-2' href='#'>Add Guide</a>
                </div>
                <div className='compGuidesLink'>
                    <a className='nav-button nav-button-3' href='#'>Completed Guides</a>
                </div>
                <div className='upcGuidesLink'>
                    <a className='nav-button nav-button-4' href='#'>Upcoming Guides</a>
                </div>
                <div className='extResLink'>
                    <a className='nav-button nav-button-5' href='#'>Resources</a>
                </div>

                {props.user.name!=='guest' ?
                   <div className='logout-button'>
                      <button className='nav-button' onClick={props.handleLogout}>Logout</button>
                 </div>
                 :
                    <>
                       <div className='login-button'>
                           <button className='nav-button' onClick={showLogin}>Login</button>
                       </div>
                       <div className='register-button'>
                           <button className='nav-button' onClick={showRegister}>Register</button>
                       </div>
                    </>
                }



            </div>
            <div className='login-links'>

            </div>
        </nav>
    </div>
  );
}
export default header
