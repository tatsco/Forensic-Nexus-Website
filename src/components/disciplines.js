import React, { Component } from "react";
import Img from "gatsby-image";

export default class Disciplines extends Component {

  render() {
    const { data } = this.props;
    return (
      <div className="discipline section" id="Disciplines">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Disciplines</h2>
          </div>
          <ul className="discipline-list">
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <a href={item.node.url} target="_blank">
                      <Img
                        fluid={item.node.image.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                      <span className="name">{item.node.siteName}</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
