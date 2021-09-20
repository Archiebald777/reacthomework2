import React from "react";
import "./error.css";
class UserImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  errorHandler = () => {
    const { error } = this.state;
    if (!error) {
      this.setState({
        error: true,
      });
    }
  };
  render() {
    const { src, alt } = this.props;
    const { error } = this.state;
    return (
      <div className="imgWrapper">
        {!error ? (
          <img
            onError={this.errorHandler}
            className="img"
            src={src}
            alt={alt}
          />
        ) : (
          <div className="img-error">
            <p className="error-text">
              {alt
                .trim()
                .split(" ")
                .map((word) => word[0])
                .join(" ")}
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default UserImg;
