import React from 'react';

function Header(props) {
    return (
        <section className="content-wrapper bg-white header-nav">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='d-flex'>
                            <div className='me-auto'>
                                Dashboard
                            </div>
                            <div className="profile-dropdown d-inline-block dropdown">
                                <a className="dropdown-toggle profile-dropdown__link" aria-expanded="false">
                                    ultim-ukumar2
                                </a>
                                <div className="dropdown-menu-end dropdown-menu">
                                    <button className="dropdown-item">Profile</button>
                                    <button>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Header;