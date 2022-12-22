import React from "react";
import { Progress } from "@material-tailwind/react";

interface Props {
  current: number;
  target: number;
  period: string;
}

interface State {}

export default class WordCountProgressBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const progress = (this.props.current / this.props.target) * 100;
    return (
      <div>
        <Progress value={progress} variant="filled" />
        <p>
          {this.props.current} / {this.props.target} words {this.props.period}
        </p>
      </div>
    );
  }
}
