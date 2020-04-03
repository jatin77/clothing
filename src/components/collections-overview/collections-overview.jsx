import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections-overview.scss";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollection }) => (
      <PreviewCollection key={id} {...otherCollection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
