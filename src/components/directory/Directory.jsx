import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";

class Directory extends Component {
  state = {
    sections: [
      {
        title: "HATS",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats"
      },
      {
        title: "JACKETS",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: ""
      },
      {
        title: "SNEAKERS",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: ""
      },
      {
        title: "MENS",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        id: 4,
        size: "large",
        linkUrl: ""
      },
      {
        title: "WOMENS",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        id: 5,
        size: "large",
        linkUrl: ""
      }
    ]
  };
  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(section => (
          <MenuItem key={section.id} section={section} />
        ))}
      </div>
    );
  }
}

export default Directory;
