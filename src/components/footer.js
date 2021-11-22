const footer = () => {
    return(
      <div>
        <div className='footer-flex-container'>
            <div className='project-techs'>
                <i style={{color: 'black'}} class="fab fa-python fa-2x"></i>
                <i style={{color: 'black'}} class="fab fa-react fa-2x"></i>
            </div>
            <div className='our-links'>
                <div className='flex-link'>
                    <a className='footer-link' href='http://github.com/lockhaim' style={{color: 'black'}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a className='footer-link' href='http://www.linkedin.com/in/ian-lockhart-/' style={{color: 'black'}}>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <p>Ian Lockhart</p>
                </div>
                <br/>
                <br/>
                <div className='flex-link'>
                    <a className='footer-link' href='http://github.com/gueronlj' style={{color: 'black'}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a className='footer-link' href='http://www.linkedin.com/in/lorensgueron/' style={{color: 'black'}}>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <p>Lorens Gueron</p>
                </div>
                <br/>
                <br/>
                <div className='flex-link'>
                    <a className='footer-link' href='http://github.com/Zmonea' style={{color: 'black'}}>
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a className='footer-link' href='http://www.linkedin.com/in/zachary-monea' style={{color: 'black'}}>
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <p>Zachary Monea</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default footer
