import React from 'react';
import { grey200, white } from 'material-ui/styles/colors';
import { GridTile } from 'material-ui/GridList';
import { Card, CardText } from 'material-ui/Card';
import { goToItemDetail } from '../data/global_paths.js';

const GridItemList = ({
  id,
  price,
  image,
  condition,
  title,
  isActive
}) => {
  return (
    <GridTile onClick={(e) => { goToItemDetail(id) }}>
      <Card style={{ backgroundColor: white }}>
        <CardText style={{ padding: 0 }}>
          <div style={{ paddingLeft: 50, display: 'flex'}}>
            <img src={image} style={{padding:"16px", height:"180px", width: "180px"}}/>
            <div style={{ paddingLeft: 15 }}>
              <span>{price}</span>
              <span>{title}</span>
            </div>
            <span style={{ width: 70 }}>{condition}</span>
          </div>
        </CardText>
      </Card>
    </GridTile>
  );
};

GridItemList.propTypes = {
  id: React.PropTypes.string,
  price: React.PropTypes.number,
  image: React.PropTypes.string,
  condition: React.PropTypes.string,
  title: React.PropTypes.string,
  isActive: React.PropTypes.bool
};

export default GridItemList;
