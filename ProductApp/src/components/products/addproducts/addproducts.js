import React from 'react';
import './addproducts.css';
import axios from 'axios';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            quantity : '',
            price : '',
            category : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const products = {
            name : this.state.name,
            quantity : this.state.quantity,
            price : this.state.price,
            category : this.state.category
        }
        axios.post("http://localhost:3002/products",products).then((responseData) => {
            console.log(responseData.data)
            alert('Product added successfully')
        })
        this.props.getAllProducts();

    }


    render() {
        return (
            <div className="addContainer">
                <div className="row">
                    <div className="col">
                        <input 
                            type="text" 
                            placeholder="ENTER NAME" 
                            name="name" 
                            id="name" 
                            onChange={this.handleChange}
                        required />

                        <input 
                            type="text" 
                            placeholder="ENTER QUANTITY" 
                            name="quantity" 
                            id="quantity" 
                            onChange={this.handleChange}
                        required />
                    </div>
                    <div className="col">
                        <input 
                            type="number" 
                            placeholder="ENTER PRICE" 
                            name="price" 
                            id="price" 
                            onChange={this.handleChange}
                        required />

                        <select name="category" defaultValue={'DEFAULT'} onChange={this.handleChange} >
                            <option value="DEFAULT" selected>CHOOSE A CATEGORY</option>
                            <option value="electronics">Electronics</option>
                            <option value="homeDecors">Home Decors</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <button type="submit" className="addproduct" onClick={this.handleSubmit}>ADD PRODUCT</button>
                </div>
            </div>
        )
    }
}

export default AddProduct
