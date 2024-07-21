function Header() {
  return (
    <div>
      <h1>Post It Simulator!</h1>
      <form>
        <input type="text" placeholder="Titulo" className="form-text" />
        <input type="text" placeholder="Descripcion" className="form-text"/>
        <input type="checkbox" class="form-check-input"/>
        <label className="form-check-label">Important</label>
        <button type="submit" className="btn btn-success">Agregar</button>
      </form>
    </div>
  );
};

export default Header;
