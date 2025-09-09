import React from "react";
import "../styles/notfound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      {/* <div className="container"> */}
      {/* <a
        href="https://codepen.io/ZonFire99/full/njdls/"
        className="notfound__viewFull"
        target="_parent"
        rel="noreferrer"
      >
        View in full it looks way better :)
      </a> */}

      <div className="notfound__error">
        <div className="notfound__wrap">
          <div className="notfound__404">
            <pre>
              <code>
                <span className="green">&lt;!</span>
                <span>DOCTYPE html</span>
                <span className="green">&gt;</span>
                <br />
                <span className="orange">&lt;html&gt;</span>
                <br />
                <span className="orange">&lt;style&gt;</span>
                <br />
                * &#123;
                <br />
                <span className="green">everything</span>:
                <span className="blue">awesome</span>;
                <br />
                &#125;
                <br />
                <span className="orange">&lt;/style&gt;</span>
                <br />
                <span className="orange">&lt;body&gt;</span>
                <br />
                ERROR 404! <br />
                FILE NOT FOUND!
                <br />
                <span className="comment">
                  &lt;!--The file you are looking for, is not where you think it
                  is.--&gt;
                </span>
                <br />
                <span className="orange"></span>
              </code>
            </pre>
          </div>
        </div>

        <span className="notfound__info">
          <span className="orange">&lt;/body&gt;</span>
          <br />
          <span className="orange">&lt;/html&gt;</span>
        </span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NotFound;
