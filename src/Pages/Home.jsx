function Home() {
  return (
    <div className="Home">
      <div className="custom-card container-fluid">
        <img src="./Customcardbg.webp" alt="Background Image" />
        <h1 className=" fw-bold  container text-white mb-5">
          Your Need Is Unique, So Your Coach Should Be Too!
        </h1>
        <div className="cards container custom-bg p-3 ">
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
        <div className=" d-flex gap-5 justify-content-center justify-content-sm-start  flex-wrap">
          <div className="image_Container">
            <img src="./bigLogo.png" alt="" />
          </div>
          <div className="txt_Container d-flex flex-column align-items-start gap-4">
            <p className="fs-2 l-s">WHY QOACH</p>
            <h1>
              Connect with coaches who've been through what you're facing and
              can guide you to success.
            </h1>
            <p className="fs-3 text-dark p-4 bg">
              Lorem ipsum dolor sit amet consectetur. Tempus amet mauris velit
              sed. Non sodales diam non viverra dui.
            </p>
            <button className="btn btn-outline-dark text-white p-3 fs-2 border-3 ">
              Join Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
