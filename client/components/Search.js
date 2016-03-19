var Search = (props) => (
  <div className="search-bar form-inline">
    <form action="" onChange={(event) => props.change(event.target.value)}>
      <input className="form-control" type="text" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  </div> 
);

window.Search = Search;
