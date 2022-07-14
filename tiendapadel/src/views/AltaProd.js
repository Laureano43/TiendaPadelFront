import '../css/AltaProd.css';

const AltaProdA = () => {

  const handleSubmitAlta = (e) => {
    e.preventDefault()
    //const data = new FormData(formLogin)
    const descripcionprod = e.target.descripcionprod.value
    const precioprod = e.target.precioprod.value
    const categoriaprod = e.target.categoriaprod.value
    const ubicacionprod = e.target.ubicacionprod.value
    const obj = {
      descripcion: descripcionprod ,
      precio: precioprod,
      categoria: categoriaprod,
      imagen: ubicacionprod 
    }
    console.log(localStorage.getItem("token"))
    fetch('https://apitiendadepadel.herokuapp.com/product/', {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(obj)
    })
        .then(res => {
          res.json()
          if(res.status===201){
                alert('Se ha agregado exitosamente el Producto')
                // window.location.href="./FormAltaProducto"
          }else{
            alert ('Error, por favor intentar de nuevo')
              }})
  }

  return (
        <>

<div class="contenedor">
    <div class="hijo">

      <h1 class="titulo-form">Registrate</h1>

      <form onSubmit={handleSubmitAlta}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Descripción</label>
          <input type="text" class="form-control" id="descripcionprod" placeholder="Example input placeholder" name="descripcion" />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Categoria</label>
          <input type="text" class="form-control" id="categoriaprod" placeholder="Example input placeholder" name="categoria" />
        </div>

        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Ubicación de la Imagen</label>
          <input type="text" class="form-control" id="ubicacionprod" placeholder="Another input placeholder" name="ubicacionimagen" />
        </div>        
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Precio</label>
          <input type="text" class="form-control" id="precioprod" placeholder="Another input placeholder" name="precio" />
        </div>

          <input type="submit" value="Enviar" class="btn btn-primary"></input>

      </form>
    </div>
</div>

        </>
        );    
};

export default AltaProdA;