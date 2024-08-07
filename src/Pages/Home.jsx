function Home() {
  return (
    <div className="Home">
      <div className="custom-card container-fluid">
        <img src="./Customcardbg.webp" alt="Background Image" />
        <h1 className=" fw-bold col-12 container text-white mb-5">
          Your Need Is Unique, So Your Coach Should Be Too!
        </h1>
        <div className="card container custom-bg p-4 col-12">
          <div className="card-body">
            <p className="card-text text-secondary mb-4 fs-4 text-start">
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
    </div>
  );
}

export default Home;
