import React from "react";
import styles from "./myChild.module.scss";
import countries from './data.json';
export interface IButtonComponentProps {
  label: string;
}
export interface IButtonComponentState {
  services: any;
  showState: boolean;
  SearchName: string;
}

export default class MyChild extends React.Component<
  IButtonComponentProps,
  IButtonComponentState
  > {
  constructor(props: IButtonComponentProps) {
    super(props);
    this.state = {
      services: [
        { id: "1", country: "Cambodia" },
        { id: "2", country: "Australia" },
        { id: "3", country: "US" },
      ],
      showState: false,
      SearchName: ""
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
  FilterHandler = (event: any) => {
    this.setState({
      SearchName: event.target.value
    })
    console.warn(event.target.value);
  }
  render() {
    const filterText = countries.countries.filter((e: any) => {
      if (e.name.toLowerCase().indexOf(this.state.SearchName.toLowerCase()) >= 0) {
        return true
      }
      else {
        return false
      }
    })
    console.log(filterText.map((el: any) => el.name));
    const InputField = <input type="search" onChange={this.FilterHandler} placeholder="Please Enter country Name to search" />;

    return (
      <div>
        <button className={styles.myChild}
          onClick={this.ListItemOpenHandler}
        >
          {this.props.label}
        </button>

        {this.state.showState === true ? (
          <div className={styles.itemOptions}>
            {InputField}
            {
              filterText.map((item: any, index: number) =>
                <a className={styles.itemOption}
                  onClick={this.ListItemCloseHandler}
                  key={index + 1}
                  href="https://www.google.com"
                  target="blank"
                >
                  {index + 1} : {item.name}
                </a>
              )
            }
          </div>) : " "}

      </div>
    );
  }
}
