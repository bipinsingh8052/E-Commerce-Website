import {useState} from 'react'
import '../css/addProduct.css'
export default function AddProduct() {
    let[images,setimages]=useState([]);
    let[select,setSelect] =useState("");
    const HandleImages=(e)=>{
        let size =Array.from(e.target.files)
        console.log(size)
        setimages(e.target.files);
        if (size.length > 4) {
            setSelect("You can only select up to 4 files.");
            setimages([]);
          } else {
            setSelect("");
          }
    }
  return (
    <>
      <div className="addProduct">
        <div className="addProduct_Section">
            <div className="addProduct_section_first">
                <h1>Add your Product </h1>
                <form >
                    <div className="name">
                        <label htmlFor="">Enter the Product Name :</label>
                        <input type="text" required />
                    </div>
                    <div className="des">
                        <label htmlFor="">Enter the Product Details : </label>
                        <input type="text" required />
                    </div>
                    <div className="Catgury">
                        <label htmlFor="">Enter the product Catugary :</label>
                        <input type="text" required />
                    </div>
                    <div className="SubCatgury">
                        <label htmlFor="">Enter the Product Sub-Catugary : </label>
                        <input type="text" required />
                    </div>
                    <div className="brand">
                        <label htmlFor="">Enter the Brand Name :</label>
                        <input type="text" required />
                    </div>
                    <div className="primer">
                        <label htmlFor="">Enter your Product  is Premium :</label>
                        <select name="premium" >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          </select>
                    </div>
                    <div className="price">
                        <label htmlFor="">Enter the max price :</label>
                        <input type="number" required />

                    </div>
                    <div className="sellingPrice">
                        <label htmlFor="">Enter the Selling price :</label>
                        <input type="number"  required/>
                    </div>
                    <div className="discount">
                        <label htmlFor="">Enter the Discount offer</label>
                        <input type="number"  required/>
                    </div>
                    <div className="defaultimg">
                        <label htmlFor="">Enter the Default Img :</label>
                        <input type="file"  required />
                    </div>
                    <div className="allimg">
                        <div>
                        <label htmlFor="">Select only 4 img </label>
                        <input type="file" multiple  required name='allimges' onChange={HandleImages}/>
                        </div>
                        {select && <p style={{ color: "red" }}>{select}</p>}
                    </div>

                    <button>Add Product</button>
                </form>
            </div>
            <div className="addProduct_Section_second">
                <div className="cartinfo">
                    <div className="Card_started">
                        <div className="img">
                            <img src="" alt="" />
                            <span>

                            </span>
                        </div>
                        <div className="heading">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quotur </p>
                            <h1>9000 <del>90000</del></h1>
                            <span>Free Delivery</span>
                            <div className='reating'> <p>4.1</p> <span>788 Reviews</span></div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
