import React from 'react';

const ItemDetail = ({
    item
}) => {
    console.log(item);
    return(
        <div>test</div>
    );
}

ItemDetail.propTypes = {
    item: React.PropTypes.object
};

export default ItemDetail;