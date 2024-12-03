import logoutButton from './logoutButton';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-entry">Create Vocab</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-language">Create Language</a>
            </li>
          </ul>
          <div id="logout-button"></div>
        </div>
      </div>
    </nav>`;

  document.querySelector('#navigation').innerHTML = domString;
  logoutButton();
};

export default navBar;
