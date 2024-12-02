import React from 'react';

type SkeletonProps = {
  isLoading: boolean;
};

const CustomSkeleton: React.FC<SkeletonProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div>
      {/* Skeleton for Image and Product Details */}
      <div className="flex items-start justify-between">
        {/* Image Skeleton */}
        <div
          className="bg-gray-200 rounded-lg animate-pulse"
          style={{
            width: '404px',
            height: '404px',
          }}
        />
        {/* Product Details Skeleton */}
        <div className="max-w-[573px] w-full">
          <div className="bg-gray-200 h-6 rounded-lg animate-pulse mb-4" style={{ width: '60%' }} />
          <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" style={{ width: '40%' }} />
          <div className="bg-gray-200 h-20 rounded-lg animate-pulse mb-4" />
          <div className="flex space-x-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 w-8 h-8 rounded-full animate-pulse"
              />
            ))}
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="bg-gray-200 h-10 w-32 rounded-lg animate-pulse" />
            <div className="bg-gray-200 h-10 w-32 rounded-lg animate-pulse" />
            <div className="bg-gray-200 h-10 w-10 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
      {/* Description Skeleton */}
      <div className="mt-[92px] mb-[127px]">
        <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" style={{ width: '40%' }} />
        <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" />
        <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" />
        <div className="bg-gray-200 h-4 rounded-lg animate-pulse mb-2" />
      </div>
    </div>
  );
};

export default CustomSkeleton;