import React from "react";
import styles from "./ButtonComponent.module.scss";
//import countries from "./Data.json";

export interface ButtonComponentProps {
  label: string;
}
export interface ButtonComponentState {
  services: any;
  showState: boolean;
}

export default class ButtonComponent extends React.Component<
  ButtonComponentProps,
  ButtonComponentState
  > {
  constructor(props: ButtonComponentProps) {
    super(props);
    this.state = {
      services: [
        { name: "Profile" },
        { name: "Logout" },
      ],
      showState: false,
      //label: "Services", //label
    };
  }

  ListItemOpenHandler = () => {
    this.setState({
      showState: true,
    });
  };
  ListItemCloseHandler = (e: any) => {
    this.setState({
      showState: false,
    });
    console.log(e.target.innerHTML);
  };
  render() {
    const { services } = this.state;
    return (
      <div data-testid="ButtonComponent" className={styles.container}>
        <button
          className={styles.DropdownComponent}
          onClick={this.ListItemOpenHandler}
        >
          {this.props.label}
        </button>
        {this.state.showState === true ? (
          <div className={styles.itemOptions}>
            <a
              className={styles.itemOption}
              onClick={this.ListItemCloseHandler}
              href="https://www.google.com"
              target="blank"
            >
              {services[0].name}
            </a>

            <a
              className={styles.itemOption}
              onClick={this.ListItemCloseHandler}
              href="https://www.reactjs.org"
              target="blank"
            >
              {services[1].name}
            </a>
          </div>
        ) : (
            "")}
        {console.log(services.map((el: any) => el.name))}
      </div>
    );
  }
}
