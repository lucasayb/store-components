import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ImageZoom from './ImageZoom'

/**
 * Selected Image component.
 * Display an image.
 */
export default class SelectedImage extends Component {
  static propTypes = {
    /** Image to be displayed */
    image: PropTypes.shape({
      /** URL of the image */
      imageUrl: PropTypes.string.isRequired,
      /** Text that describes the image */
      imageText: PropTypes.string.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    children: img => img,
  }

  state = {
    showZoom: false,
  }

  handleMouseEnterImage = () => {
    this.setState({ showZoom: true })
  }

  handleMouseLeaveZoom = () => {
    this.setState({ showZoom: false })
  }

  render() {
    const {
      image: { imageUrl, imageText },
    } = this.props
    const { showZoom } = this.state

    return (
      <div className="vtex-product-image__selected-image-container w-100 relative overflow-hidden tc">
        <div
          className="vtex-product-image__selected-image bg-center contain"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onMouseEnter={this.handleMouseEnterImage}
          title={imageText}
        />
        <div className="vtex-product-image__image-zoom-container absolute">
          {showZoom && (
            <ImageZoom
              src={imageUrl}
              alt={imageText}
              onMouseLeaveZoom={this.handleMouseLeaveZoom}
            />
          )}
        </div>
      </div>
    )
  }
}