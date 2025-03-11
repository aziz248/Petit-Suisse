function LoginPage() {
  return (
    <form className="LoginForm" onSubmit={(e) => e.preventDefault()} action="">
      <section className="LoginForm">
        <div className="LoginForm">
          <h1>Login and study with <br/><span className="petit">Petit </span><span className="suisse">Suisse</span></h1>
          <div>
            <label htmlFor="">First Name : </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Last Name : </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email Address : </label>
            <input type="email" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Birthdate : </label>
            <input type="date" name="" id="" />
          </div>
          <div className="FormDivButton">
            <button className="LoginForm" type="submit">submit</button>
          </div>
        </div>
      </section>
    </form>
  );
}

export default LoginPage;
