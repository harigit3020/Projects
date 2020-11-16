import React from 'react';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4'">
                    <div className="jumbotron">
                        <form>
                            <h2>Deposit</h2>
                            <div className="form-group">
                                <label for="exampleInputEmail1">user name</label>
                                <input type="text" className="form-control" id="uname" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Amount</label>
                                <input type="text" className="form-control" id="amt" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-4">
                <div className="jumbotron">
                        <form>
                            <h2>Withrawel</h2>
                            <div className="form-group">
                                <label for="exampleInputEmail1">user name</label>
                                <input type="text" className="form-control" id="uname" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Amount</label>
                                <input type="text" className="form-control" id="amt" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Home;