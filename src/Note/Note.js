import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
import './Note.css'

export default class Note extends React.Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_ENDPOINT}/notes/${noteId}` , {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization':`bearer ${config.API_KEY}`
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId)
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    // const { name, id} = this.props
    const {name, id, modified} = this.props
    return (
      <div className='Note'>
        <h2 className='Note__title'>
          <Link to={`/note/${id}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified 
            {' '}
            <span className='Date'>
              {modified}
            </span> 
          </div> 
         </div>
         {/* <div>{content}</div> */}
      </div>

    )
  }
}
Note.propTypes = {
  name: PropTypes.string,
  onDeleteNote: PropTypes.func.isRequired
}

// Note.propTypes = {
//   name: PropTypes.string.isRequired,
//   onDeleteNote: PropTypes.func.isRequired
// }
