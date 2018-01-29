import React from "react";
import { render } from "react-dom";

const poem = `You are old, Father William (Carroll)
“You are old, father William,” the young man said,
“And your hair has become very white;
And yet you incessantly stand on your head–
Do you think, at your age, it is right?”

“In my youth,” father William replied to his son,
“I feared it might injure the brain;
But now that I’m perfectly sure I have none,
Why, I do it again and again.”`

class Reader extends React.Component {
  constructor() {
    super();
    this.state = {
      font: "small"
    };
  }

  handleFont = e => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    if (inputName === "fontSize") {
      if (inputValue.toLowerCase() === "small") {
        this.setState({
          font: "small"
        });
      } else if (inputValue.toLowerCase() === "medium") {
        this.setState({
          font: "medium"
        });
      } else if (inputValue.toLowerCase() === "large") {
        this.setState({
          font: "large"
        });
      }
    }
  };

  render() {
    return (
      <div>
        <p>Font Size</p>
        <input
          id="fontSize"
          type="text"
          name="fontSize"
          defaultValue="small"
          onChange={this.handleFont}
        />
        <pre id="text" className={this.state.font}>
          {poem}
        </pre>
      </div>
    );
  }
}

render(<Reader />, document.getElementById("root"));
