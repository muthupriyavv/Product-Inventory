import React from 'react';
import DisplayProduct from './displayproducts/display';
import './products.css';
import axios from 'axios';
import AddProduct from './addproducts/addproducts';


class Product extends React.Component {

    constructor(){
        super();
        this.state = {
            clicked : false,
            productList : []
        }
        this.getAllProducts = this.getAllProducts.bind(this)
    }

    componentWillMount(){
       this.getAllProducts()
    }
     
    async getAllProducts(){
      await axios.get("http://localhost:3002/products").then((responseData) => {
          this.setState({
              productList : responseData.data
          })
          console.log(this.state.productList)
       })

    }


    render(){
        return(
            <div>
                <br></br>
                <AddProduct getAllProducts={this.getAllProducts}/>
                <br></br>
                <DisplayProduct  productList={this.state.productList} getAllProducts={this.getAllProducts} /> 
            </div>
        )
    }

}

export default Product;
