import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">CITCS</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <a href="#" className="nav-item nav-link">BSIT</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Mission</a>
                            <a href="#" className="dropdown-item">Vision</a><hr/>
                            <a href="#" className="dropdown-item">Quality Policy</a>
                        </div>
                    </div>
                    <a href="#" className="nav-item nav-link">Enrollment</a>
                </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
            <div className="col-8">
                <div className="jumbotron shadow-lg p-3 mb-5 pt-5 mt-2 rounded pb-5">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-success btn-lg" href="#" role="button">Learn more</a>
                    <div className="form-text pb-4"></div>
                </div>
            </div>
            <div className="col-4">
                <div className="card mt-2">
                    <div className="card-body pb-5">
                        <form>
                            <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Email address</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                              <label for="exampleInputPassword1" className="form-label">Password</label>
                              <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button><hr/>
                            <div className="form-text pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container-fluid text-center mt-5 text-black-50">
        <h1>Lorem Ipsum</h1>
        <p className="fst-italic fw-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam aliquet, placerat ex ac, finibus erat. Aenean eros enim, tempus ut lectus sit amet, condimentum varius lectus. Sed commodo id neque non molestie. Suspendisse eleifend pellentesque neque vel rutrum. Nam vitae sem mi. Suspendisse viverra vehicula varius. Maecenas efficitur tellus vel augue scelerisque commodo. Sed facilisis ante ante, a efficitur leo convallis eu. Aliquam erat volutpat. Maecenas faucibus nibh sit amet nulla placerat, sit amet congue dui vestibulum. Vestibulum mollis libero mollis, luctus metus sed, porttitor sem. Etiam ultricies magna posuere lacus gravida scelerisque. Integer aliquet lorem nec neque lobortis porttitor. Suspendisse vitae imperdiet eros.
        </p>
      </div>

      <div className="cotainer-fluid">
        <div className="row mx-1">
            <div className="col">
                <div className="card">
                    <img src="1.PNG" className="card-img-top" alt="example picture"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="1.PNG" className="card-img-top" alt="example picture"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="1.PNG" className="card-img-top" alt="example picture"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <br/>
      
        <footer className="bg-dark p-3 text-white-50 pb-3">
          <div className="row">
                <div className="col-4">
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <hr className="vertical py-1 mx-auto"/>
                </div>
                <div className="col-3">
                    <div className="form-text text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam aliquet, placerat ex ac, finibus erat. Aenean eros enim, tempus ut lectus sit amet, condimentum varius lectus. Sed commodo id neque non molestie. Suspendisse eleifend pellentesque neque vel rutrum. Nam vitae sem mi. Suspendisse viverra vehicula varius. Maecenas efficitur tellus vel augue scelerisque commodo. Sed facilisis ante ante, a efficitur leo convallis eu. Aliquam erat volutpat. Maecenas faucibus nibh sit amet nulla placerat, sit amet congue dui vestibulum.
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <hr className="vertical py-1 mx-auto"/>
                </div>
                <div className="col-3">
                    <div className="form-text text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam aliquet, placerat ex ac, finibus erat. Aenean eros enim, tempus ut lectus sit amet, condimentum varius lectus. Sed commodo id neque non molestie. Suspendisse eleifend pellentesque neque vel rutrum. Nam vitae sem mi. Suspendisse viverra vehicula varius. Maecenas efficitur tellus vel augue scelerisque commodo. Sed facilisis ante ante, a efficitur leo convallis eu. Aliquam erat volutpat. Maecenas faucibus nibh sit amet nulla placerat, sit amet congue dui vestibulum.
                    </div>
                </div>
            </div>
        </footer>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
