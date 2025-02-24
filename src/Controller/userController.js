
import Product from "../Modal/MenueModal.js";

const TakeAllData=async (req,res)=>{
   try {
    const products = await Product.find().select("_id name description price type");

    // console.log(products);
    
    return res.status(200).json(products);
   } catch (error) {
        console.error("Error in userSide:", error);
        return res.status(500).json({ message: "Internal server error" });
   }
}

export {TakeAllData}