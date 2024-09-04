import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

const getCartItems = async () => {
  const response = await apiClient.get("/shoppingCarts/1");
  return response.data.items;
};

const updateCartItem = async (updatedItem) => {
  try {
    const response = await apiClient.get("/shoppingCarts/1");
    const shoppingCart = response.data;

    const itemIndex = shoppingCart.items.findIndex(
      (item) => item.id === updatedItem.id
    );

    if (itemIndex !== -1) {
      shoppingCart.items[itemIndex] = updatedItem;

      await apiClient.put(`/shoppingCarts/${shoppingCart.id}`, shoppingCart);
    } else {
      throw new Error("Item not found in the shopping cart");
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};

const deleteCartItem = async (itemId) => {
  try {
    const response = await apiClient.get("/shoppingCarts/"+itemId);
    const shoppingCart = response.data;

    const itemIndex = shoppingCart.items.findIndex(
      (item) => item.id === itemId
    );

    if (itemIndex !== -1) {
      shoppingCart.items.splice(itemIndex, 1);

      await apiClient.put(`/shoppingCarts/${shoppingCart.id}`, shoppingCart);
    } else {
      throw new Error("Item not found in the shopping cart");
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
  }
};

const addCartItem = async (newItem) => {
  try {
    const response = await apiClient.get("/shoppingCarts/1");
    const shoppingCart = response.data;

    // Check if the item is already in the cart
    const itemIndex = shoppingCart.items.findIndex(
      (item) => item.id === newItem.id
    );

    if (itemIndex !== -1) {
      throw new Error("Item already in the shopping cart");
    } else {
      shoppingCart.items.push(newItem);
    }

    const updateResponse = await apiClient.put(
      `/shoppingCarts/${shoppingCart.id}`,
      shoppingCart
    );

    if (updateResponse && updateResponse.status === 200) {
      return updateResponse;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};








// Function to post or update data to the JSON server
const postScholarshipData = async (data) => {

  try {
    let response;

    // If no userId is provided, create a new scholarship entry
    response = await apiClient.post("/scholarship`${userId}`", data);

    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Fetch scholarship data for a specific user by userId
const checkUserID = async (userId) => {
  try {
    const response = await apiClient.get("/scholarship");
    // Find the scholarship data for the given userId
    const userID = response.data.find((item) => item.userId === userId);
    if (userID) {
      return userID;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching scholarship data:", error);
    throw error;
  }
};

// Fetch existing sponsor data for a specific user by userId
const getExistingSponsor = async (userID) => {
  try {
    const response = await apiClient.get(`/scholarship`);

    if (response) {
      //Apply the knowledge of loop to get the sponsor according to the userID
      for(let i=0; i<response.data.length; i++){
          if(response.data[i].userID === userID){
            console.log((response.data[i].sponsor))
            return (response.data[i].sponsor);
          }
      }
    
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching scholarship data:", error);
    throw error;
  }
};
// Update scholarship data for a specific user by userId
const updateScholarshipData = async (userId, updatedSponsor) => {
  try {
   await apiClient.put(`/scholarship`, updatedSponsor);
  } catch (error) {
    console.error("Error updating scholarship data:", error);
    throw error;
  }
};

export default {
  getMarketplaceItems() {
    return apiClient.get("/marketplaceItems");
  },
  getMarketplaceItem(id) {
    return apiClient.get("/marketplaceItems/" + id);
  },
  createMarketplaceItem(marketplaceItem) {
    return apiClient.post("/marketplaceItems", marketplaceItem);
  },
  updateMarketplaceItem(marketplaceItem) {
    return apiClient.put(
      "/marketplaceItems/" + marketplaceItem.id,
      marketplaceItem
    );
  },
  deleteMarketplaceItem(id) {
    return apiClient.delete("/marketplaceItems/" + id);
  },
  getCartItems,
  updateCartItem,
  deleteCartItem,
  addCartItem,
  postScholarshipData,
  checkUserID,
  updateScholarshipData,
  getExistingSponsor,
};



