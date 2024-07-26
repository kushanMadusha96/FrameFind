import React from 'react'
import { RxCross2 } from "react-icons/rx";
import ProfileImage from '../ProfileImage/ProfileImage';
import seller from '../../../../public/user.jpg'
import FiveStar from '../FiveStar/FiveStar';
import Review from '../Review/Review';

function SellerReviewContainer() {
  const REVIEWS = [
    {
      id: 1, component: < Review />
    },
    {
      id: 2, component: < Review />
    },
    {
      id: 3, component: < Review />
    },
    {
      id: 4, component: < Review />
    },
    {
      id: 5, component: < Review />
    },
  ]
  return (
    <div style={{ width: 300, maxHeight: '70%', border: '1px solid black', marginLeft: 10, borderRadius: 5, paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
      <div style={{ backgroundColor: 'red', display: 'flex', alignItems: 'center', position: 'relative', marginTop: 10, marginBottom: 25 }}>
        <span style={{ fontWeight: 'bold', position: 'absolute', display: 'inline-block', width: 'fit-content', left: 0, right: 0, margin: 'auto' }}>
          Kushan's Reviews
        </span>
        <RxCross2
          color='gray'
          size={20}
          style={{
            position: 'absolute',
            right: 0
          }}
        />
      </div>
      {
        REVIEWS.map((review, index) => (
          <div key={review.id} style={{ borderBottom: '2px solid #EEEDEB', paddingBottom: 10, }}>
            {review.component}
          </div>
        ))
      }
    </div>
  )
}

export default SellerReviewContainer