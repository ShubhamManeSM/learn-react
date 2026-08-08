import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Blogs() {
    return (
        <>
        <Header/>
      <main className="container">
        <h1>Blogs</h1>
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 1</h5>
                  <p className="card-test">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis, quas!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 2</h5>
                  <p className="card-test">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nobis, quas!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mt-3">
                  <div className="card-body">
                    <h5>Blog 3</h5>
                    <p className="card-test">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nobis, quas!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </>
    );
  }
  