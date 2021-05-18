import React, { Component } from 'react'

export class UserProfile extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <div className="container-fluid"><br></br>
                        <h3>User Profile</h3><br></br>
                        <div className="row ml-2">
                            
                            <br></br>
                           <div className="col-md-3">
                           
                                <div className="card card-primary card-outline">
                                    <div className="card-body box-profile">
                                    <div className="text-center">
                                        {/* <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" /> */}
                                        <img alt="Avatar" className="img-circle" src="../../dist/img/avatar5.png"></img>
                                    </div>
                                    <h3 className="profile-username text-center">Selva</h3>
                                    <p className="text-muted text-center">Admin</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                        <b>Followers</b> <a className="float-right">1,322</a>
                                        </li>
                                        <li className="list-group-item">
                                        <b>Following</b> <a className="float-right">543</a>
                                        </li>
                                        <li className="list-group-item">
                                        <b>Friends</b> <a className="float-right">13,287</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                                    </div>
                             
                                </div>
                          
                               
                                
                           
                            </div>

                            <div className="col-md-4">
                                <div className="card card-primary">
                                    <div className="card-header">
                                    <h3 className="card-title">About Me</h3>
                                    </div>
                                   
                                    <div className="card-body">
                                    <strong><i className="fas fa-book mr-1" /> Education</strong>
                                    <p className="text-muted">
                                        B.S. in Computer Science from the University of Tennessee at Knoxville
                                    </p>
                                    <hr />
                                    <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Demo Street 123, Demo City 04312, NJ</li>
                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone #: + 800 - 12 12 23 52</li>
                                        </ul>
                                    <hr />
                                    <strong><i className="fas fa-pencil-alt mr-1" /> Skills</strong>
                                    <p className="text-muted">
                                        <span className="tag tag-danger">UI Design</span>
                                        <span className="tag tag-success">Coding</span>
                                        <span className="tag tag-info">Javascript</span>
                                        <span className="tag tag-warning">PHP</span>
                                        <span className="tag tag-primary">Node.js</span>
                                    </p>
                                    <hr />
                                    <strong><i className="far fa-file-alt mr-1" /> Notes</strong>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                                    </div>
                          
                                </div>
                            </div>


                         

                        </div>
                   
                       
                    </div>
                </section>
                   

            </div>
        )
    }
}

export default UserProfile
