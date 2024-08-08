function Home() {
  return (
    <div className="Home">
      <div className="custom-card container-fluid">
        <img src="./Customcardbg.webp" alt="Background Image" />
        <h1 className=" fw-bold  container text-white mb-5">
          Your Need Is Unique, So Your Coach Should Be Too!
        </h1>
        <div className="cards container custom-bg br p-4 ">
          <div className="card-body ">
            <p className="card-text text-secondary mb-4 fs-3 text-start">
              <span className="text-white">I am not able to scale up</span> my
              IT business. How to generate leads and increase Sales. Please
              Suggest A Coach
            </p>
            <div className="vectorContainer">
              <img className="vector" src="./Vector.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* __________________________________________ */}
      <div className="container-fluid stats-section d-flex justify-content-around  flex-wrap gap-5">
        <div className="stat">
          <h2>10,000+</h2>
          <p className="fs-2">Sessions Conducted</p>
        </div>
        <div className="stat">
          <h2>40,000+</h2>
          <p className="fs-2">Users Enrolled</p>
        </div>
        <div className="stat">
          <h2>1000+</h2>
          <p className="fs-2">Experienced Coaches</p>
        </div>
      </div>

      {/* __________________________________________ */}

      <div className="container-fluid">
        <header className="text-center d-flex flex-column gap-3 mt-5">
          <p className="fs-3 fw-bold l-s ">How It's Work</p>
          <h1 className="fw-fw-bolder bolder">We Offer The Best COACH</h1>
        </header>

        <div className="container-fluid m-auto pd d-flex justify-content-center flex-row flex-wrap gap-5">
          <div className="card p-2">
            <div className="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 className="card-title fs-2 mt-4 mb-3">State Your Problem</h2>
              <p className="card-text fs-3 mb-4">
                Describe your goals or challenges, and our algorithm will find a
                suitable match for you.
              </p>
            </div>
          </div>
          <div className="card p-2 ">
            <div className="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 className="card-title fs-2 mt-4 mb-3">
                Filter to Get the Best
              </h2>
              <p className="card-text fs-3 mb-4">
                Swipe left or right and answer a few questions to refine your
                search based on your interests.
              </p>
            </div>
          </div>
          <div className="card p-2 ">
            <div className="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 className="card-title fs-2 mt-4 mb-3">Know Your Coach</h2>
              <p className="card-text fs-3 mb-4">
                Explore coach activities such as shorts, social feeds, live
                sessions, and short listings.
              </p>
            </div>
          </div>
          <div className="card p-2 ">
            <div className="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 className="card-title fs-2 mt-4 mb-3">
                Connect with Your Coach
              </h2>
              <p className="card-text fs-3 mb-4">
                Explore coach activities such as shorts, social feeds, live
                sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* __________________________________________ */}

      <div className="container-fluid pd whyQoacha">
        <div className="row justify-content-center align-items-center gap-5">
          <div className="col-xl-4 col-lg-6 col-sm-12 order-1 order-sm-1 image_Container ">
            <img src="./bigLogo.png" alt="Logo" />
          </div>
          <div className="col-xl-4 col-lg-6 col-sm-12 order-2 order-sm-2  d-flex flex-column gap-4 align-items-start">
            <p className="fs-2 l-s">WHY QOACH?</p>
            <h1 className="lh fs">
              Connect with coaches who've been through what you're facing and
              can guide you to success.
            </h1>
            <p className="fs-3 text-dark p-4 bg">
              Lorem ipsum dolor sit amet consectetur. Tempus amet mauris velit
              sed. Non sodales diam non viverra dui.
            </p>
            <button className="btn btn-outline-dark text-white p-3 fs-2 border-3">
              Join Demo
            </button>
          </div>
        </div>
      </div>

      {/* __________________________________________ */}

      <div className="container-fluid p-5">
        <header className="text-center d-flex flex-column gap-3 mt-5">
          <p className="fs-2 fw-bold l-s ">OUR TRENDING</p>
          <h1 className="fw-bolder">Top COACH</h1>
        </header>
        <div className="container w-auto">
          <div className="row gap-5 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6  text-center mt-5 br p-4 ccss">
              <img width={75} className="m-auto" src="./profile1.png" alt="" />
              <h2 className="fs-1 fw-bold mt-2">Jim Robey</h2>
              <p className="fs-4">Spirituality, Leadership, Executive</p>
              <p>
                <span className="mx-3 fs-4">
                  <img src="./1.png" alt="" /> !6 Years{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./2.png" alt="" /> 20k{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./3.png" alt="" /> $399{" "}
                </span>
              </p>
              <img className="tags" width={80} src="./tags.png" alt="" />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 text-center mt-5 br p-4 ccss">
              <img width={75} className="m-auto" src="./profile2.png" alt="" />
              <h2 className="fs-1 fw-bold mt-2">Jim Robey</h2>
              <p className="fs-4">Spirituality, Leadership, Executive</p>
              <p>
                <span className="mx-3 fs-4">
                  <img src="./1.png" alt="" /> !6 Years{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./2.png" alt="" /> 20k{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./3.png" alt="" /> $399{" "}
                </span>
              </p>
              <img className="tags" width={80} src="./tags2.png" alt="" />
            </div>{" "}
            <div className="col-xl-3 col-lg-4 col-md-6 text-center mt-5 br p-4 ccss">
              <img width={75} className="m-auto" src="./profile3.png" alt="" />
              <h2 className="fs-1 fw-bold mt-2">Jim Robey</h2>
              <p className="fs-4">Spirituality, Leadership, Executive</p>
              <p>
                <span className="mx-3 fs-4">
                  <img src="./1.png" alt="" /> !6 Years{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./2.png" alt="" /> 20k{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./3.png" alt="" /> $399{" "}
                </span>
              </p>
              <img className="tags" width={80} src="./tags3.png" alt="" />
            </div>{" "}
            <div className="col-xl-3 col-lg-4 col-md-6  text-center mt-5 br p-4 ccss">
              <img width={75} className="m-auto" src="./profile1.png" alt="" />
              <h2 className="fs-1 fw-bold mt-2">Jim Robey</h2>
              <p className="fs-4">Spirituality, Leadership, Executive</p>
              <p>
                <span className="mx-3 fs-4">
                  <img src="./1.png" alt="" /> !6 Years{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./2.png" alt="" /> 20k{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./3.png" alt="" /> $399{" "}
                </span>
              </p>
              <img className="tags" width={80} src="./tags.png" alt="" />
            </div>
            <div className="col-lg-4  col-xl-3  col-md-6 text-center mt-5 br p-4 ccss">
              <img width={75} className="m-auto" src="./profile2.png" alt="" />
              <h2 className="fs-1 fw-bold mt-2">Jim Robey</h2>
              <p className="fs-4">Spirituality, Leadership, Executive</p>
              <p>
                <span className="mx-3 fs-4">
                  <img src="./1.png" alt="" /> !6 Years{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./2.png" alt="" /> 20k{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./3.png" alt="" /> $399{" "}
                </span>
              </p>
              <img className="tags" width={80} src="./tags3.png" alt="" />
            </div>{" "}
            <div className="col-xl-3 col-lg-4 col-md-6 text-center mt-5 br p-4 ccss">
              <img width={75} className="m-auto" src="./profile3.png" alt="" />
              <h2 className="fs-1 fw-bold mt-2">Jim Robey</h2>
              <p className="fs-4">Spirituality, Leadership, Executive</p>
              <p>
                <span className="mx-3 fs-4">
                  <img src="./1.png" alt="" /> !6 Years{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./2.png" alt="" /> 20k{" "}
                </span>
                <span className="mx-3 fs-4">
                  <img src="./3.png" alt="" /> $399{" "}
                </span>
              </p>
              <img className="tags" width={80} src="./tags2.png" alt="" />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
