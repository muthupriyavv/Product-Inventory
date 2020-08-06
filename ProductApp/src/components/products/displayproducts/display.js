import React from 'react';
import './display.css';
import axios from 'axios';

class DisplayProduct extends React.Component {

    constructor(props){
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id){
       axios.delete(`http://localhost:3002/products/${id}`).then((responseData) => {
           console.log(responseData)
           alert('Product deleted Successfully')
           this.props.getAllProducts()
       })
    }

    render() {
    
    const productDetails = this.props.productList.map((product) => {
        return (
            <tbody key={product.id}>
            <tr>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><button className="button editbutton"  >EDIT</button></td>
                <td><button className="button deletebutton" onClick={() => this.deleteProduct(product.id)}>DELETE</button></td>
            </tr>
            </tbody>

        )
     })
        return (
            <div className="mainContainer">
                <table>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    {productDetails}
                </table>
            </div>
        )
    }
}

export default DisplayProduct