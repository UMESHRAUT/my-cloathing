import React, { Component } from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "/one.jpg",
          id: 1
        },
        {
          title: "jackets",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRapfpwTge1qQ-vof9deNQOtlpxhxZMhoT4H1gtBlcriFbb_4nK",
          id: 2
        },
        {
          title: "shoes",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIXVVwfYs-uU0het-VT_-7i8TSabvOf2PpP5zFWO7weMFQQcPW",
          id: 3
        },
        {
          title: "Womens",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyTZy4Hv2t3TMQsxjO4LD_2sHCLcAAfOLp1l46QTapnyZH4Yjc",
          id: 4,
          size: "large"
        },
        {
          title: "mens",
          imageUrl:
            "https://shop.diesel.com/on/demandware.static/-/Sites-diesel-navigation-catalog/default/dwf919c6f8/NAVIGATION/WK29_FW19_MaleMobile.jpg",
          id: 5,
          size: "large"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
