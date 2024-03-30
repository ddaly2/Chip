const App = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Temporary Nav Bar</h1>
        <nav>
          <ul>
            <li>
              <h2>
                <a href={`/calculator`}>Calculator</a>
              </h2>
            </li>
            <li>
              <h2>
                <a href={`/tools`}>Financial Tools</a>
              </h2>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default App;
