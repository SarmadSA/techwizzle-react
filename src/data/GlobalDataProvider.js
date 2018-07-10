import React, { Component } from 'react';

const DataContext = React.createContext();
export default DataContext;

export class DataProvider extends Component {
  state = {
    selectedProfile : "1",
    titlet: 'testing'
  }

  // testing(value){
  //   this.setState({selectedProfile: value});
  //   console.log("value was set to: " + this.state.selectedProfile);
  // }

  render() {
    console.log(this.state.selectedProfile);

    return (
      <DataContext.Provider 
        value={{ 
          state: this.state, 
          setSelectedProfile: (value) => this.setState({selectedProfile: value})
        }}>
        {this.props.children}
      </DataContext.Provider>
    )
    console.log(this.state.selectedProfile);
  }
}