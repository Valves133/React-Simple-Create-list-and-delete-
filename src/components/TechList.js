import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  // static defaultProps = {

  // }
  // static PropTypes = {
  // }
  state = {
    newTech: '',
    techs: []
  };

// Executado assim que aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem('techs');

    if(techs){
      this.setState({ techs: JSON.parse(techs)});
    }
  } 
  
  // Executado sempre que houver alterações nas props ou estados
  componentDidUpdate(_, prevState){
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = e =>{
    this.setState({ newTech: e.target.value});
  }

  handleInputSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech],
    newTech:''
    });
  }

  handleDelete = (tech) =>{
        this.setState({ techs: this.state.techs.filter(t => t !== tech)});
  }

  render(){
    const { newTech, techs } = this.state;
    return(
      <form onSubmit={this.handleInputSubmit}>
        <ul>
          {techs.map(tech => 
          <TechItem 
            key={tech} 
           tech={tech} 
            onDelete={() => this.handleDelete(tech)}
          />)}
        </ul>
        <input 
        type="text" 
        onChange={this.handleInputChange}
        value={newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
