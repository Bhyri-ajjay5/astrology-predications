import React from 'react';
import './SkeletonSection.css';

function SkeletonSection() {
  return (
    <div className="skeleton-section">
      <div className="skeleton skeleton-title mb-3"></div>
      <div className="skeleton skeleton-text mb-2"></div>
      <div className="skeleton skeleton-text mb-2"></div>
      <div className="skeleton skeleton-text mb-2"></div>
      <div className="skeleton skeleton-btn mt-3"></div>
    </div>
  );
}

export default SkeletonSection;
