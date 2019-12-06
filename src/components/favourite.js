import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = (dispatch) => ({
  getFav: () => dispatch({
    type: "getFav"
  }),
  removeFav: (id) => dispatch({
    type: "removeToFav",
    data: id
  })
});

export class Favourite extends Component {
  static propTypes = {
    list: PropTypes.array,
    getFav: PropTypes.func
  }

  componentDidMount() {
    this.props.getFav()
  }

  render() {
    const favourites = this.props.list
    return (
      <div>
        {favourites && favourites.length > 0 && <div className="favourite px-2 py-2">
          <h1>Favourite</h1>
          <ul>
            {favourites.map((favouriteId) => {
              return <li key={favouriteId}>{favouriteId} <a href="#" onClick={() => this.props.removeFav(favouriteId)}><i className="fa fa-times"></i></a></li>
            })}
          </ul>
          <div className='separator'></div>
        </div>}
      </div>
    )
  }
}

Favourite.defaultProps = { list: [] }

export default connect(
  state => ({
    list: state.favourites,
  }),
  mapDispatchToProps
)(Favourite)
