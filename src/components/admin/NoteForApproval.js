import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export class NoteForApproval extends Component {
    render() {
        return (
            <div>
                {/* <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Note For Approval</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active">Note For Approval</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section> */}
                <section className="content">
                    <div className="container-fluid">
               
                        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                    
                                    <div className="input-group input-group-sm">
                                                {/* <input type="text" className="form-control" placeholder="Enter Role..." /> */}
                                                <span className="input-group-append">
                                                    <button type="button" className="btn btn-primary btn-flat" data-toggle="modal" data-target="#note-model">Create New Note &nbsp;&nbsp;<i class="fas fa-plus"></i></button>
                                                </span>
                                            </div>
                                    </div>
                                    <div className="card-tools">
                                        <div className="input-group input-group-sm" style={{width: 350}}>

                                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                            <div className="input-group-append">
                                            <button type="submit" className="btn btn-default">
                                                <i className="fas fa-search" />
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            <div className="card-body" >
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th style={{"width":"6%"}}>Doc No</th>
                                        <th style={{"width":"10%"}}>Note Date</th>
                                        <th>Subject</th>
                                        <th style={{"width":"15%"}}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>123456</td>
                                        <td>10-10-2021</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>123456</td>
                                        <td>10-10-2021</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>123456</td>
                                        <td>10-10-2021</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>123456</td>
                                        <td>10-10-2021</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. .</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>123456</td>
                                        <td>10-10-2021</td>
                                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. unknown printer took a galley of type and scrambled it to make a type specimen book.</td>
                                        <td className="project-actions ">
                                            <a className="btn btn-info btn-sm" href="#"><i className="fas fa-pencil-alt"></i>Edit</a>&nbsp;&nbsp;
                                            <a className="btn btn-danger btn-sm" href="#" data-toggle="modal" data-target="#modal-default"><i className="fas fa-trash"></i>Delete</a>
                                        </td>
                                    </tr>
                                   
                                </tbody>
                                </table>
                            </div>
                            <div class="card-footer clearfix">
                                <ul class="pagination pagination-sm m-0 float-right">
                                <li class="page-item"><a class="page-link" href="#">«</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">»</a></li>
                                </ul>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                   
                       
                    </div>
                </section>

                    <div className="modal fade" id="note-model">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">New Note</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">


                       <div className="container-fluid">
                            <form className="form-inline">
                                <label htmlFor="inlineFormEmail" className="m-2">Document No <span class="text-danger">*</span></label>
                                <input type="email" className="form-control m-2" id="inlineFormEmail" />
                                <label htmlFor="inlineFormPassword" className="m-2">Document Date <span class="text-danger">*</span></label>
                                <input type="password" className="form-control m-2" id="inlineFormPassword" />
                                <label htmlFor="confirmFormPassword" className="m-2">Title <span class="text-danger">*</span></label>
                                <input type="password" className="form-control m-2" id="confirmFormPassword" />
                            </form>
                                <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title"></h3>
                                        <div className="card-tools">

                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0" >
                                        <CKEditor
                                                editor={ ClassicEditor }
                                                data="<p>Hello from CKEditor 5!</p>"
                                                onReady={ editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                    console.log( 'Editor is ready to use!', editor );
                                                } }
                                                onChange={ ( event, editor ) => {
                                                    const data = editor.getData();
                                                    console.log( { event, editor, data } );
                                                } }
                                                onBlur={ ( event, editor ) => {
                                                    console.log( 'Blur.', editor );
                                                } }
                                                onFocus={ ( event, editor ) => {
                                                    console.log( 'Focus.', editor );
                                                } }
                                            />
                                    </div>
                                    </div>
                                    
                                </div>
                                </div>


                        </div>


                        
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                            </div>
                        </div>
                     </div>
            </div>
        )
    }
}

export default NoteForApproval
