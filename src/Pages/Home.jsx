function Home() {
  return (
    <div className="Home">
      <div className="custom-card container-fluid">
        <img src="./Customcardbg.webp" alt="Background Image" />
        <h1 className=" fw-bold  container text-white mb-5">
          Your Need Is Unique, So Your Coach Should Be Too!
        </h1>
        <div className="cards container custom-bg p-4 ">
          <div className="card-body">
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
          <div class="card p-2">
            <div class="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 class="card-title fs-2 mt-4 mb-3">State Your Problem</h2>
              <p class="card-text fs-3 mb-4">
                Describe your goals or challenges, and our algorithm will find a
                suitable match for you.
              </p>
            </div>
          </div>
          <div class="card p-2 ">
            <div class="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 class="card-title fs-2 mt-4 mb-3">Filter to Get the Best</h2>
              <p class="card-text fs-3 mb-4">
                Swipe left or right and answer a few questions to refine your
                search based on your interests.
              </p>
            </div>
          </div>
          <div class="card p-2 ">
            <div class="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 class="card-title fs-2 mt-4 mb-3">Know Your Coach</h2>
              <p class="card-text fs-3 mb-4">
                Explore coach activities such as shorts, social feeds, live
                sessions, and short listings.
              </p>
            </div>
          </div>
          <div class="card p-2 ">
            <div class="card-body">
              <img src="./men.png" className="mt-4" alt="" />
              <h2 class="card-title fs-2 mt-4 mb-3">Connect with Your Coach</h2>
              <p class="card-text fs-3 mb-4">
                Explore coach activities such as shorts, social feeds, live
                sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
