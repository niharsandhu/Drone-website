import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './utils/Item';
import Title from './utils/Title';
import Modal from './utils/Modal';

const Sales = React.forwardRef(({ ifExists, endpoint: { title, items }, onProductClick }, ref) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id, e) => {
    if (e.target.closest('.cart-button') || e.target.closest('.buy-now-button')) {
      return;
    }
    setSelectedProductId(id);
    setIsModalOpen(true);
    if (onProductClick) {
      onProductClick(id);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  if (!ifExists) return null;

  return (
    <div className='nike-container' ref={ref}>
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-4  ${ifExists ? 'grid-cols-4 xl:grid-cols-4 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, i) => (
          <Item 
            {...item} 
            key={i} 
            onClick={(e) => openModal(item.id, e)} 
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          itemId={selectedProductId}
          onClose={closeModal}
        />
      )}
    </div>
  );
});

Sales.propTypes = {
  ifExists: PropTypes.bool,
  endpoint: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onProductClick: PropTypes.func,
};

Sales.defaultProps = {
  ifExists: true,
  onProductClick: () => {},
};

export default Sales;








