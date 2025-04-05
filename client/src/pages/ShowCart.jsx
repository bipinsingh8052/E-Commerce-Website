import { useState } from 'react';
import '../css/showCartDetail.css'

export default function ShowCart() {
    const [comment, setComment] = useState('');
    const [allComments, setAllComments] = useState([
      "Great product!",
      "Really useful and affordable.",
      "Looking forward to buying this."
    ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (comment.trim()) {
        setAllComments([comment, ...allComments]);
        setComment('');
      }
    };
  return (
    <div className="product-container">
      <div className="left-images">
        
        <div className="thumbnail-images">
          <img src="./logo.png" alt="Thumb 1" />
          <img src="./logo.png" alt="Thumb 2" />
          <img src="./logo.png" alt="Thumb 3" />
          <img src="./logo.png" alt="Thumb 4" />
        </div>
        <div className="main-image">
          <img src="/logo.png" alt="Main Product" />
        </div>
      </div>

      <div className="right-details">
        <h2>INFINITY by Harman Tranz 710</h2>
        <p className="price">₹1,799 <span>₹3,999</span> <strong>55% off</strong></p>
        <p className="status sold-out">Sold Out</p>
        <div className="highlights">
          <h4>Highlights</h4>
          <ul>
            <li>With Mic: Yes</li>
            <li>Bluetooth version: 5</li>
            <li>Wireless range: 10 m</li>
            <li>Battery life: 72 hr | Charging time: 3 hr</li>
          </ul>
        </div>

        <button className="notify-btn">Add to Cart</button>
        <div className="comment-box">
      <h3>Feedback From custmor</h3>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      <div className="comments-list">
        {allComments.map((c, idx) => (
          <div key={idx} className="comment">
            {c}
          </div>
        ))}
      </div>
    </div>
        </div>
    </div>
  )
}
