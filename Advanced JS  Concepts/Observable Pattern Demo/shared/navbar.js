import Home from "../pages/home.js";
import Settings from "../pages/settings.js";
import { UserService, userService } from "../user/user.service.js";
export default class NavBar {

    constructor() {
        this.render()
        this.addEventListeners();
        this.changeUsername(userService.user.username);
        userService.userObsv.subscribe((data)=>{
            this.changeUsername(data);
        })
    }

    render() {
        let appElement = document.getElementById('app')

        appElement.insertAdjacentHTML(
            "beforeend",
            `<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" id="Home" style="cursor:pointer">
                <a class="nav-link active" aria-current="page">Home</a>
              </li>
              <li class="nav-item" id="Settings" style="cursor:pointer">
                <a class="nav-link">Settings</a>
              </li>
              <li class="nav-item" id="Settings" style="cursor:pointer">
              <div id="user"></div>
            </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`
      );
    }

    addEventListeners() {
        //declare variables/acces elements
        let homeElem = document.getElementById('Home');
        let settingsElem = document.getElementById('Settings');
        let appElement = document.getElementById('app');

        // Attach event listener
        homeElem.addEventListener('click', () => {
            // Clear the app elements
            appElement.innerHTML = '';
            // Reinitialize the navbar and home
            new NavBar();
            new Home();
        });

        settingsElem.addEventListener('click', () => {
            //Clear the app element
            appElement.innerHTML = '';
            // Reinitialize the narvbar and settings
            new NavBar();
            new Settings();
        });
    }

    changeUsername(username){
        let userElem = document.getElementById('user');
        userElem.innerText = `Welcome, ${username}`
    }
}