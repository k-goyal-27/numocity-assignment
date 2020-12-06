import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    items: [],
    item: "",
    message: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
  };

  handleItemChange = (event) => {
    event.preventDefault();
    console.log("fghjk", event.target.value);

    this.setState(({ items, item }) => ({
      items: [...items, ...item.split(",")],
      item: "",
    }));
    if (this.state.items.length <= 3) {
      this.setState({
        message: "Enjoy!",
      });
    } else if (this.state.items.length === 4) {
      this.setState({
        message: "Careful",
      });
    } else if (this.state.items.length >= 5) {
      this.setState({
        message: "Too much!",
      });
    }
  };

  handleInputChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  render() {
    console.log("qwerty", this.state.items.length);
    return (
      <div className="container">
        <p style={{ textAlign: "center" }}> Diet Tracker App </p>

        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.handleItemChange}>
              <label html="lableForInput">What have you Eaten today?</label>
              <input
                type="text"
                className="form-control"
                id="lableForInput"
                placeholder="What have you Eaten today?"
                value={this.state.item}
                onChange={this.handleInputChange}
              />
              <br></br>
              <br></br>
              <button
                type="submit"
                className="btn btn-primary"
                /* disabled={this.state.items.length ? "" : "disabled"} */
              >
                Check If Too Much
              </button>{" "}
              <span>{this.state.message}</span>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
