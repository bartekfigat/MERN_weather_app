import React from "react";
import { Link } from "react-router-dom";

import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import Moment from "react-moment";

const Post = function Post({ post, link }) {
  return (
    <MDBCardBody>
      <MDBRow>
        <MDBCol lg="5" xl="4">
          <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
            <img className="img-fluid" src={post.displayImages} alt="img" />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        </MDBCol>
        <MDBCol lg="7" xl="8">
          <h3 className="font-weight-bold mb-3 p-0">
            <p className="h1-responsive font-weight-bold text-center my-5">
              {post.city}
            </p>
            <strong>{post.description}</strong>
          </h3>

          <p className="dark-grey-text">
            {post.info},{post.temperature},
            <img src={post.iconLink} alt="img" />
          </p>
          <p>
            by{" "}
            <a href="#!" className="font-weight-bold">
              Jessica Clark
            </a>
            ,{" "}
            <Moment fromNow ago>
              {post.date}
            </Moment>
          </p>
          {link && (
            <Link to={`/index/${post._id}`}>
              <MDBBtn color="primary" size="md">
                Read More
              </MDBBtn>
            </Link>
          )}
        </MDBCol>
      </MDBRow>
    </MDBCardBody>
  );
};

export default Post;
