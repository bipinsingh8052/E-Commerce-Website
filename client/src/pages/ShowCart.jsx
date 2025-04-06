import { useEffect, useState } from 'react';
import '../css/showCartDetail.css'
import { useParams } from 'react-router-dom';
import Url from '../cofi/BaseUrl';
import axios from 'axios';

export default function ShowCart() {
  const [cartDetail,setCartDetail]=useState({});
    const [comment, setComment] = useState('');
    
    const [allComments, setAllComments] = useState([
      "Great product!",
      "Really useful and affordable.",
      "Looking forward to buying this."
    ]);

    let {id}=useParams();
    console.log(id)

    const Loading=async()=>{
      let api =`${Url}/custmor/ShowCartDetails`;
      try {
        let response=await axios.post(api,{id:id});
        console.log(response.data);
        setCartDetail(response.data);
      } catch (error) {
        console.log("error");
      }
    }


  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (comment.trim()) {
        setAllComments([comment, ...allComments]);
        setComment('');
      }
    };


    useEffect(()=>{Loading()},[])
  return (
    <div className="product-container">
      <div className="left-images">
        
        <div className="thumbnail-images">
          <img src={cartDetail.secondimgUrl} alt="Thumb 1" />
          <img src={cartDetail.thirdimgUrl} alt="Thumb 2" />
          <img src={cartDetail.FourImgUrl} alt="Thumb 3" />
          <img src={cartDetail.fiveImgUrl} alt="Thumb 4" />
        </div>
        <div className="main-image">
          <img src={cartDetail.firstimgUrl} alt="Main Product" />
        </div>
      </div>

      <div className="right-details">
        <h2>{cartDetail.Productname }</h2>
        <p className="price">₹ {cartDetail.sellprice} <span>₹ {cartDetail.price}</span> <strong>{cartDetail.discount}% off</strong></p>
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
