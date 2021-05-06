import React, { Component, Fragment } from "react";
import UppyModal from "./UppyModal";

class ImagesList extends Component {
  state = {
    images: [],
  };

  handleUploadCompleted = (id, url) => {
    let images = this.state.images;
    images.push({ id, url });
    this.setState({ images });
  };

  render() {
    const { images } = this.state;

    return (
      <Fragment>
        <UppyModal handleUploadCompleted={this.handleUploadCompleted} />
        <table>
          <tbody>
            {images.map((image) => (
              <tr key={image.id}>
                <td>
                  {image.id} - {image.url}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default ImagesList;
