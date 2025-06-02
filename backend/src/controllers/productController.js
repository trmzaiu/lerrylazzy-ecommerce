import productService from '../services/productService'

const displayProducts = async (req, res) => {
    try {
        const { productid, categoryid, subcategoryid }  = req.query
        let products = ''
        if (categoryid) {
            products = await productService.getProductsByCategory(categoryid)
            console.log('Get products by category: ', products)

        } else if (subcategoryid) {
            products = await productService.getProductsBySubcategory(subcategoryid)
            console.log('Get products by subcategory: ', products)

        } else if (productid) {
            // Retrieve product details
            products = await productService.getProductById(productid)
            
            // Calculate average rating and total reviews
            const review = await productService.calculateReview(productid)
    
            // Calculate total orders
            const totalOrders = await productService.calTotalOrders(productid)
            
            products.AverageRating = review.averageRating
            products.TotalReviews = review.totalReviews
            products.CountStars = review.starCounts
            products.TotalOrders = totalOrders

            console.log('Product details:', products)

        }
        return res.status(200).json(products)
    } catch (error) {
        console.error('Error handling display prroduct request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const displayAllProduct = async (req,res) => {
    try {
        const products = await productService.getAllProducts()
        return res.status(200).json(products)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const displayHotProduct = async (req, res) => {
    try {
        const message = await productService.getHotProduct()
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling display prroduct request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const displayNewProduct = async (req, res) => {
    try {
        const message = await productService.getNewProduct()
        return res.status(200).json(message)
    } catch (error) {
        console.error('Error handling display product request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const displayProductReviews = async (req, res) => {
    try {
        const { productid } = req.query

        if (!productid) {
            return res.status(400).json({
                errCode: 1,
                message: 'Missing required parameters'
            })
        }

        const reviews = await productService.getAllReviews(productid)
        return res.status(200).json(reviews)
    } catch (error) {
        console.error('Error handling display product reviews request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

const displayProductByKeyword = async (req, res) => {
    try {
        const { keyword } = req.query

        const { products, count } = await productService.searchProduct(keyword)
        if (count === 0) {
            return res.status(404).json({
                errCode: 1,
                errMessage: 'No products found!',
                count: 0,
                products: []
            })
        }

        return res.status(200).json({
            errCode: 0,
            errMessage: 'Products found successfully!',
            count: count,
            products: products
        })
    } catch (error) {
        console.error('Error handling display product by keyword request: ', error)
        return res.status(500).json({
            errCode: -1,
            message: 'An internal server error occurred.'
        })
    }
}

module.exports = {
    displayProducts: displayProducts,
    displayAllProduct: displayAllProduct,
    displayHotProduct: displayHotProduct,
    displayNewProduct: displayNewProduct,
    displayProductReviews: displayProductReviews,
    displayProductByKeyword: displayProductByKeyword
}
