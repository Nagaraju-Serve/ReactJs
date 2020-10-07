import React from "react";
import styles from "./DropdownComponent.module.scss";
import countries from "./Dropdowndata.json";

export interface DropdownComponentProps {}

export interface DropdownComponentState {
  value: string;
  countries: any;
}

export default class DropdownComponent extends React.Component<
  DropdownComponentProps,
  DropdownComponentState
> {
  constructor(props: DropdownComponentProps) {
    super(props);
    this.state = {
      value: "coconut",
      countries: [
        { id: "1", country: "Cambodia" },
        { id: "2", country: "Australia" },
        { id: "3", country: "US" },
      ],
    };
  }
  render() {
    return (
      <div data-testid="DropdownComponent">
        <label>
          <select className={styles.DropdownComponent}>
            {countries.countries.map((item: any, index: number) => (
              <option
                key={index}
                id={item.id}
                value={item.name}
                className={styles.itemOptions}
              >
                {item.name}
              </option>
            ))}
            {console.log(countries.countries.map((el: any) => el.name))}
          </select>
        </label>
      </div>
    );
  }
}
