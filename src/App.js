import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    // copy current list of items
    const list = [...this.state.list];
    // console.log(list);

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <h1>My TODO List</h1>
        Add an Item
        <input
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={(e) => this.updateInput(e.target.name, e.target.value)}
        />
        <button
          onClick={() => this.addItem()}
          disabled={!this.state.newItem.length}
        >
          Add
        </button>
        <br />
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button onClick={() => this.deleteItem(item.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
