import { useState } from 'react';
import '../css/addtoCart.css'

export default function AddToCart() {
    let [address,setAddress]=useState(false);
    const [formData, setFormData] = useState({
        house: '',
        road: '',
        pincode: '',
        city: '',
        state: '',
        nearby: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const closeAddress=()=>{
        setAddress(false)
      }
    
      const handleSubmit = () => {
        console.log("Form Submitted", formData);
        // Add validation or API call logic here
      };
    const Handlesubmit=()=>{
        setAddress(true)
    }


    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => {
      if (quantity > 1) setQuantity(prev => prev - 1);
    };
    const products = [
        {
          name: 'Coffee Lycra Blend Saree With Blouse',
          price: 286,
          size: 'Free Size',
          qty: 1,
          seller: 'juicee collection',
          image: 'https://via.placeholder.com/80x100'
        },
        {
          name: 'Most Viral Tissue silk Saree With Khatli Work Border',
          price: 964,
          originalPrice: 1035,
          discount: '7% Off',
          size: 'Free Size',
          qty: 1,
          seller: 'RUDRA_STORE',
          image: 'https://via.placeholder.com/80x100'
        }
      ]


  return (
    <>
    <div className="cart-page">
    {/* Left Cart List */}
    <div className="cart-products">
      <h3>Product Details</h3>
      <div className="product-list">
        {products.map((p, index) => (
          <div key={index} className="product-card">
            <img src={p.image} alt={p.name} />
            <div className="details">
              <h5>{p.name}</h5>
              <p>₹{p.price} {p.originalPrice && <span className="original">₹{p.originalPrice}</span>} <span className="off">{p.discount}</span></p>
              <p>Size: {p.size} • Qty: <div className="counter-wrapper">
      <button className="counter-btn" onClick={decrement}>−</button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="counter-input"
      />
      <button className="counter-btn" onClick={increment}>+</button>
    </div></p>
              <p className="remove">✖ REMOVE</p>
              <p className="seller">Sold by: {p.seller}</p>
            </div>
            {/* <p className="edit">EDIT</p> */}
          </div>
        ))}
      </div>
    </div>

    {/* Right Fixed Price Section */}
    <div className="cart-summary">
      <h4>Price Details (3 Items)</h4>
      <div className="price-row">
        <p>Total Product Price</p>
        <p>₹1859</p>
      </div>
      <div className="price-row">
        <p>Total Discounts</p>
        <p className="discount">- ₹92</p>
      </div>
      <hr />
      <div className="price-row total">
        <p>Order Total</p>
        <p>₹1767</p>
      </div>
      <div className="success-msg">✅ Yay! Your total discount is ₹92</div>
      <button className="continue-btn" onClick={Handlesubmit}>Continue</button>

      <div className="secure-note">
        <h6>🛡️ Your Safety, Our Priority</h6>
        <p>We make sure your package is safe at every point of contact.</p>
      </div>
    </div>
   
  </div>
  {address?<div className='allthis'>
            <div className="form-wrapper">
            <div className="form-header">
              <h3>ADD DELIVERY ADDRESS</h3>
              <button className="close-btn" onClick={closeAddress}>×</button>
            </div>
      
            <div className="form-body">
              <h4 className="address-heading">📍 Address</h4>
      
              <input
                type="text"
                name="house"
                placeholder="House no./ Building name"
                value={formData.house}
                onChange={handleChange}
              />
              <input
                type="text"
                name="road"
                placeholder="Road name / Area / Colony"
                value={formData.road}
                onChange={handleChange}
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
      
              <div className="row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                <select name="state" value={formData.state} onChange={handleChange}>
                  <option value="">State</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="RJ">Rajasthan</option>
                </select>
              </div>
      
              <input
                type="text"
                name="nearby"
                placeholder="Nearby Famous Place/Shop/School,etc.(optional)"
                value={formData.nearby}
                onChange={handleChange}
              />
      
              <button className="save-btn" onClick={handleSubmit}>
                Save Address and Continue
              </button>
            </div>
          </div>
          </div>: " "}
  </>
  )
}
