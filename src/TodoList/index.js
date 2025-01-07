import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}

      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmpty()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="TodoList"> {props.searchedTodos.map(props.render)}</ul>
    </section>
  );
}

export { TodoList };
