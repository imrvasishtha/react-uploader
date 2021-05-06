import React, { Component } from "react";

const Uppy = require("uppy/lib/core");
const DashboardModal = require("uppy/lib/react/DashboardModal");
const Tus = require("uppy/lib/plugins/Tus");

class AvatarPicker extends Component {
  state = { modalOpen: false };

  handleUploadModalOpen = () => this.setState({ modalOpen: true });
  handleUploadModalClose = () => this.setState({ modalOpen: false });

  componentWillUnmount() {
    this.uppy.close();
  }

  render() {
    const { handleUploadCompleted } = this.props;

    this.uppy = Uppy({
      meta: { type: "avatar" },
      autoProceed: true,
    });

    this.uppy.use(Tus, { endpoint: "https://master.tus.io/files/" });

    this.uppy.on("complete", (result) => {
      console.log("Completed upload, result:", result);
      const id = result.successful[0].id;
      const url = result.successful[0].uploadURL;
      handleUploadCompleted(id, url);
    });

    this.uppy.run();

    return (
      <div>
        {/*<Dashboard/>*/}
        <DashboardModal
          uppy={this.uppy}
          closeModalOnClickOutside
          open={this.state.modalOpen}
          onRequestClose={this.handleUploadModalClose}
        />
        <button onClick={this.handleUploadModalOpen}>Upload files</button>
      </div>
    );
  }
}

export default AvatarPicker;
