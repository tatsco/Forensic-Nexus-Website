import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  PinterestShareButton,
  RedditShareButton
} from "react-share";

const Share = ({ socialConfig }) => {
  return (
    <div className="post-social">
      <h6 className="title is-6">Share:</h6>
      <EmailShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded email"
        subject={socialConfig.config.title}>
          <span className="icon">
            <i className="fab"></i>
          </span>
          <span className="text">Email</span>
      </EmailShareButton>
      <FacebookShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded facebook"
      >
        <span className="icon">
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded twitter"
        title={socialConfig.config.title}
        via="forensicnexus">
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <PinterestShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded pinterest"
        media={socialConfig.config.image}>
          <span className="icon">
              <i className="fab fa-pinterest-p"></i>
          </span>
          <span className="text">Pinterest</span>
      </PinterestShareButton>
      <RedditShareButton
        url={socialConfig.config.url}
        className="button is-outlined is-rounded reddit">
          <span className="icon">
              <i className="fab fa-reddit-alien"></i>
          </span>
          <span className="text">Reddit</span>
      </RedditShareButton>
    </div>
  );
};

Share.propTypes = {
  socialConfig: PropTypes.shape({
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};
Share.defaultProps = {
  tags: []
};

export default Share;
