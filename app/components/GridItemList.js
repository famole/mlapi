import React from 'react';
import { grey200, white } from 'material-ui/styles/colors';
import { GridTile } from 'material-ui/GridList';
import { Card, CardText } from 'material-ui/Card';
import { goToItemDetail } from '../data/global_paths.js';
import classes from '../assets/styles/common.scss';

const GridItemList = ({
  id,
  price,
  image,
  condition,
  title,
  isActive,
  handleItemClick
}) => {
  return (
    <GridTile onClick={(e) => { handleItemClick(id) }}>
      <Card style={{ backgroundColor: white }}>
        <CardText style={{ padding: 0 }}>
          <div className={classes.list_item} >
            <div className={classes.image_container}>
              <img src={image}/>
            </div>
            <div>
              <span>{price}</span>
              <span>{title}</span>
            </div>
            <div>
              <span style={{ width: 70 }}>{condition}</span>
            </div>
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
