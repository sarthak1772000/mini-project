import React, { Component } from 'react';

class SubmitIdea extends Component {
    render(){
        return(
            <React.Fragment>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-md-7">
                            <div className="card">
                                <div className="card-header"><b>Submit Idea</b></div>
                                <div className="line"></div>
                                <div className="card-body" className="login">
                                    <form>
                                        <div className="form-group text-left">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="group">Group Name</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="group" 
                                                placeholder="Group Name"
                                            />
                                        </div>
                                        <div className="form-group text-left">
                                            <label htmlFor="leader">Leader Name</label>
                                            <input type="text" 
                                                className="form-control" 
                                                id="leader" 
                                                placeholder="Leader Name"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="abstract">Write a project abstract</label>
                                            <textarea className="form-control" id="abstract" rows="6" placeholder="project abstract"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label for="file">Submit synopsis of Idea</label>
                                            <input type="file" className="form-control-file" id="file" />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SubmitIdea;