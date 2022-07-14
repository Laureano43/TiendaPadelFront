import '../css/Nav.css';

const NavApp = () => {
    return (
        <>

<nav class="navbar navbar-expand-lg navbar-light bg-light Navegador">
    <div class="container-fluid fuente">
      <img class="img-fluid navbar-brand" src="./images/Logo.png" alt=""></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Quienes">Quiénes somos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Indumentaria
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/Paletas">Paletas</a></li>
              <li><a class="dropdown-item" href="/Remeras">Remeras</a></li>
              <li><a class="dropdown-item" href="/Zapas">Zapatillas</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item disabled" href="/Mochilas">Mochilas y Bolsos</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Novedades
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/RankingMasculino">Ranking Masculino</a></li>
              <li><a class="dropdown-item" href="/RankingFemenino">Ranking Femenino</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/Login">Login</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href=" " id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Actualizar
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/FormAltaProducto">Alta de Productos</a></li>
              <li><a class="dropdown-item disabled" href="/FormBajaProductos">Baja de Productos</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/FormAltaRanking">Alta de Ranking</a></li>
              <li><a class="dropdown-item disabled" href="/FormBajaRanking">Baja de Ranking</a></li>
            </ul>
          </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Que queres buscar..." aria-label="Search" name="ProductoBusqueda"></input>
          <button class="btn btn-outline-success" type="submit" action="/BuscarProducto">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
        
        </>
        );    
};

export default NavApp;