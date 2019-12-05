import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './item';

const fetchListAction = () => ({
  type: "updateList",
  payload: {
    request: {
      url: 'https://pokeapi.co/api/v2/pokemon'
    }
  }
});

const mapDispatchToProps = (dispatch) => ({
  doFetch: () => dispatch(fetchListAction()),
  fav: (id) => dispatch({
    type: "addToFav",
    data: id
  })
});

export class List extends Component {
  static propTypes = {
    list: PropTypes.array,
    doFetch: PropTypes.func
  }

  componentDidMount() {
    this.props.doFetch()
  }

  render() {
    const list = this.props.list
    return (
      <div className="list">
        {list.map((id) => (
          <Item key={id} id={id}/>
        ))}
      </div>
    );
  }
}

List.defaultProps = { list: [] }

export default connect(
  state => ({
    list: state.pokemonList.ids
  }),
  mapDispatchToProps
)(List)
