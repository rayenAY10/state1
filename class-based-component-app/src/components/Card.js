import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'rayen ayachi',
      bio: 'a person who like to be better',
      imgSrc: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/356087704_1032748827895260_6056075386112532418_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NmLFqImbeXkAX8LnQdB&_nc_ht=scontent.ftun1-2.fna&oh=00_AfANJypD1XkCytJXiR1LDrmfksIGC2RQrgZ2Zlu_eDCIPg&oe=653A3B62',
      profession: 'Web Developer',
    },
    show: false,
    mountTime: 0,
  };

  componentDidMount() {
    this.setState({ mountTime: new Date().getTime() });
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Time Interval Since Mount: {new Date().getTime() - this.state.mountTime}ms</p>
      </div>
    );
  }
}

export default App;
