import React, { ChangeEvent, FormEvent } from "react";
import { Button } from "@material-tailwind/react";

interface Props {}

interface State {
  count: string;
}

export default class WordCountForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const input = (event.target as HTMLInputElement).value;
    const numbersOnlyInput = input.replace(/\D/g, "");
    this.setState({ count: numbersOnlyInput });
  }

  handleSubmit() {
    alert("A word count was submitted: " + this.state.count);
  }

  render() {
    return (
      <div>
        <input
          className="border-2"
          type="text"
          value={this.state.count}
          onChange={this.handleChange}
        />
        <Button onClick={() => this.handleSubmit()}>Log</Button>
      </div>
    );
  }
}
