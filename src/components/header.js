const header = () => {
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
                <div className='login-button'>
                    <a className='nav-button' href='#'>Login</a>
                </div>
                <div className='register-button'>
                    <a className='nav-button' href='#'>Register</a>
                </div>
            </div>
            <div className='login-links'>

            </div>
        </nav>
    </div>
  );
}
export default header
