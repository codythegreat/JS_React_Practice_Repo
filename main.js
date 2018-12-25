"use strict";

const e = React.createElement;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true
    };
    this.name = "Test Profile";
    this.description =
      "A test profile used in this webapp. You can see the posts owned by this profile in the center of the screen.";
    this.creationDate = new Date();
    this.creationDateToString = `${this.creationDate.getMonth() +
      1}/${this.creationDate.getDate()}/${this.creationDate.getFullYear()}`;
    this.postCount = 1;
  }

  render() {
    return e(
      "div", {
        className: "container-profile"
      },
      e(
        "div", {
          className: "container-profile-image"
        },
        e("img", {
          className: "profile-img",
          src: "test-profile-img.jpg"
        })
      ),
      e(
        "div", {
          className: "container-profile-name"
        },
        e("h5", {
          className: "profile-name-text"
        }, `${this.name}`)
      ),
      e(
        "div", {
          className: "container-profile-desc"
        },
        e("p", {
          className: "profile-desc-text"
        }, `${this.description}`)
      ),
      e(
        "div", {
          className: "container-profile-date"
        },
        e(
          "p", {
            className: "profile-info-text"
          },
          `Member since ${this.creationDateToString}`
        )
      ),
      e(
        "div", {
          className: "container-profile-post"
        },
        e(
          "p", {
            className: "profile-info-text"
          },
          `Post total: ${this.postCount}`
        )
      )
    );
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.author = "Test Profile";
    this.postContent = `"R" is amongst the most menacing of sounds. That's why they call it murder, not "mukduk."`;
    this.likeCount = 0;
    this.commentCount = 0;
    this.date = new Date();
    this.dateString = `${this.date.getMonth() +
      1}/${this.date.getDate()}/${this.date.getFullYear()}`;
  }

  render() {
    return e(
      "div", {
        className: "container-post"
      },
      e(
        "div", {
          className: "container-post-header"
        },
        e("h5", null, `${this.author}:`),
        e(
          "p", {
            className: "container-post-content"
          },
          `${this.postContent}`
        ),
        e(
          "div", {
            className: "container-post-information"
          },
          e("div", {
            className: "container-post-button"
          }),
          e("div", {
            className: "container-post-comment"
          }),
          e(
            "p", {
              className: "post-information-text"
            },
            `${this.likeCount} Likes | ${this.commentCount} Comments | Date: ${
              this.dateString
            }`
          )
        )
      )
    );
  }
}

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    this.parent = samplePost;
  }

  render() {
    if (this.state.liked) {
      return e(
        "p", {
          className: "like-button-pressed"
        },
        "Liked"
      );
    }

    return e(
      "button", {
        className: "btn-xs btn-primary",
        onClick: () => {
          this.setState({
            liked: true
          });
          this.parent.likeCount++;
          this.parent.setState(this.parent.state);
        }
      },
      "Like"
    );
  }
}

class CommentButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: true
    };
    this.parent = undefined;
  }

  render() {
    if (!this.state.enabled) {
      return;
    }

    return e(
      "button", {
        className: "btn-xs btn-success",
        onClick: () => {
          this.parent.comments++;
        }
      },
      "Comment"
    );
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    this.owner = "Example User";
    this.creationDate = new Date();
    this.creationDateToString = `${this.creationDate.getMonth() +
      1}/${this.creationDate.getDate()}/${this.creationDate.getFullYear()}`;
    this.parent = undefined;
    this.likeCount = 3;
    this.content = "Great post!";
  }

  render() {
    if (this.state.visible) {
      return e(
        "div", {
          className: "container-comment"
        },
        e("h5", {
          className: "comment-owner"
        }, `${this.owner}:`),
        e("p", {
          className: "comment-content"
        }, `${this.content}`),
        e(
          "div", {
            className: "containter-comment-info"
          },
          e("div", {
            className: "container-like-button"
          }),
          e("div", {
            className: "container-comment-button"
          }),
          e(
            "p", {
              className: "comment-information-text"
            },
            `${this.likeCount} Likes | Date: ${this.creationDateToString}`
          )
        )
      );
    }
  }
}

const profileContainer = document.getElementById("profile-snapshot");
const domContainer = document.getElementById("post-quick-view");
let sampleProfile = ReactDOM.render(e(Profile), profileContainer);
let samplePost = ReactDOM.render(e(Post), domContainer);
ReactDOM.render(
  e(LikeButton),
  document.getElementsByClassName("container-post-button")[0]
);
ReactDOM.render(
  e(CommentButton),
  document.getElementsByClassName("container-post-comment")[0]
);
ReactDOM.render(e(Comment), document.getElementById("post-comments"));