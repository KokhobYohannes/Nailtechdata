import React, { Component } from "react";
import NailTechCard from "./components/NailTechCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import nailtechs from "./nailtechs.json";

class App extends Component {
  state = {
    nailtechs,
  };

  removeNailTech = (id) => {
    const nailtechs = this.state.nailtechs.filter(
      (nailtechs) => nailtechs.id !== id
    );
    this.setState({ nailtechs });
  };

  render() {
    return (
      <Wrapper>
        <Title>View Our Featured Nail Techicians!</Title>
        {this.state.nailtechs.map((nailtechs) => (
          <NailTechCard
            removeNailTech={this.removeNailTech}
            id={nailtechs.id}
            key={nailtechs.id}
            name={nailtechs.name}
            image={nailtechs.image}
            phonenumber={nailtechs.phonenumber}
            salonname={nailtechs.salonname}
            salonwebsite={nailtechs.salonwebsite}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
