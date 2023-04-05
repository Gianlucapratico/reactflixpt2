import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faTh } from "@fortawesome/free-solid-svg-icons";

const TvShows = () => (
  <div className="container-fluid px-4 py-4 text-white">
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4 ">TV Shows</h2>
        <div className="dropdown ml-4 mt-1">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle rounded-0 ms-3"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ backgroundColor: "#221f1f" }}
          >
            Genres &nbsp;
          </button>
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faThLarge}
          className="icons text-white-50 mx-3 "
        />
        <FontAwesomeIcon icon={faTh} className="icons text-white-50 mx-3 " />
      </div>
    </div>
  </div>
);
export default TvShows;
