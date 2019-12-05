import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const fetchItemAction = (name) => ({
  type: "updateListItem",
  payload: {
    request: {
      url: 'https://pokeapi.co/api/v2/pokemon/' + name
    }
  }
});

const mapDispatchToProps = (dispatch) => ({
  doFetch: name => dispatch(fetchItemAction(name)),
  fav: (id) => dispatch({
    type: "addToFav",
    data: id
  })
});

export class Item extends Component {
  static propTypes = {
    doFetch: PropTypes.func
  }

  state = {
    opened: false
  }

  toggle = () => {
    const { opened } = this.state
    this.setState({
      opened: !opened
    })
  }

  render() {
    const { name, weight, sprites, abilities} = this.props.item
    const { opened } = this.state
    const itemClick = name => {
      this.toggle()
      this.props.doFetch(name)
    }
    return (
      <div className='item-details col-xs-12 col-sm-3 col-md-3 col-lg-3 px-0 py-2'>
        <a href='#' onClick={() => itemClick(name)} className="item-link">
          <h2 className='name'>{name}</h2>
          {opened && <div className='more-info mb-4'>
            {!!sprites && <img src={sprites.front_default}  className="img-thumbnail"/>}
            <div className='separator'></div>
            {!!weight && <p>Weight: {weight}</p>}
            {!!abilities && <ul>Abilities: {abilities.map((item) => {
              return (
                <li key={item.ability.name}>{item.ability.name}</li>
              )
            })}</ul>}
          </div>}
        </a>
        <div>
          <button className="btn btn-primary" onClick={() => this.props.fav(name)}>Add to my collection</button>
        </div>
      </div>
    );
  }
}

Item.defaultProps = { item: {} }

export default connect(
  (state, props) => ({
    item: state.pokemonList.byIds[props.id]
  }),
  mapDispatchToProps
)(Item)
