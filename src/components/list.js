import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Item from './item';

const fetchListAction = (url) => ({
  type: "updateList",
  payload: {
    request: {
      url: url
    }
  }
});

const mapDispatchToProps = (dispatch) => ({
  doFetch: url => dispatch(fetchListAction(url)),
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
    this.props.doFetch('https://pokeapi.co/api/v2/pokemon')
  }

  render() {
    const list = this.props.list
    const pagination = this.props.pagination
    const fetch = url => this.props.doFetch(url)
    const classPrev = classNames('page-item', 'px-0', {disabled: !pagination.previous})
    const classNext = classNames('page-item', {disabled: !pagination.next})
    return (
      <div>
        <div className="list">
          {list.map((id) => (
            <Item key={id} id={id}/>
          ))}
        </div>
        <nav>
          <ul className="pagination">
            <li className={classPrev}><a className="page-link" href="#" onClick={() => fetch(pagination.previous)}>Previous</a></li>
            <li className={classNext}><a className="page-link" href="#" onClick={() => fetch(pagination.next)}>Next</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

List.defaultProps = { list: [], pagination: { next: '', previous: ''}, doFetch: () => {} }

export default connect(
  state => ({
    list: state.pokemonList.ids,
    pagination: {
      next: state.pokemonList.pagination.next,
      previous: state.pokemonList.pagination.previous
    }
  }),
  mapDispatchToProps
)(List)
