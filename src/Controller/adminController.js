import dotenv from "dotenv";
dotenv.config()
const EMAIL = process.env.EMAIL
const PASSWORD = process.env.PASSWORD
import Product from "../Modal/MenueModal.js";

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email, password);


        // Check if email matches
        if (email !== EMAIL) {
            return res.status(401).json({ message: "Invalid email or password" });
        }


        if (password !== PASSWORD) {
            return res.status(401).json({ message: "Invalid email or password" });
        }


        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
async function AddItem(req, res) { 
    try {
        const { name, description, price, type } = req.body;

        // console.log(name, price, category);
        if (!name || !price || !description || !type) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (!["drinks", "food"].includes(type)) {
            return res.status(400).json({ message: "Invalid type. Must be 'drinks' or 'food'." });
        }
        const newProduct = new Product({
            name,
            description,
            price,
            type,
        });

        // Save the product to the database
        const savedProduct = await newProduct.save();

        res.status(201).json({ message: "Product created successfully", product: savedProduct });
        // return res.status(200).json({ message: "Item added successfully" });
    } catch (error) {
        console.error("AddItem Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
const UpdateItem = async (req, res) => {
    try {
        // const { id } = req.params; // Get the ID from URL params
        const updateData = req.body;
        //  console.log( updateData);
         
        if (!updateData._id) return res.status(400).json({ message: "ID is required" });

        const updatedItem = await Product.findByIdAndUpdate(updateData._id, { $set: updateData }, { new: true });

        if (!updatedItem) return res.status(404).json({ message: "Item not found" });

        return res.status(200).json({ message: "Item updated successfully", data: updatedItem });

        
    } catch (error) {
        console.error("AddItem Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const DeleteItem = async (req, res) => {
    try {
        const { id } = req.query; 

        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        const deletedItem = await Product.findByIdAndDelete(id); 

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }

        return res.status(200).json({ message: "Item deleted successfully", data: deletedItem });

    } catch (error) {
        console.error("DeleteItem Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};




export { Login, AddItem,UpdateItem,DeleteItem };