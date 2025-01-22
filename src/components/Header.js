import React from 'react'
import favicon from '../images/favicon.png';


export default function Header({category, setCategory}) {
  return (
    <div>
        <nav className="navbar navbar-light  " style={{ backgroundColor: '#e3f2fd' }}>
            <a className="navbar-brand" href="/" style={{fontSize: '25px', fontWeight: 700, padding: '10px'}}>
                <img src={favicon} width="35" height="35" className="d-inline-block align-top" alt="" style={{marginRight: '10px'}} />
                News Panda
            </a>

            <p className="nav-item dropdown mt-3 mr-3">
                <select onChange={(e) => setCategory(e.target.value)} value={category} 
                    style={{
                        fontSize: '20px',
                        backgroundColor: 'transparent',
                        fontWeight: 700,
                        padding: '10px',
                        boxShadow: '0px 0px 10px black',
                        borderRadius: '10px',
                      }}
                    >
                    <option value="general">General</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </p> {/* <li>  */}
        </nav>
    </div>
  )
}
