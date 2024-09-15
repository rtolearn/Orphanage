import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";

const userId = useMessageStore().userId; // Get the userId from the store

const fetchMarketplaceItems = async () => {
  try {
    const { data, error } = await supabase
      .from("marketplace_items")
      .select("*");

    if (error) {
      throw new Error(`Error fetching marketplace items: ${error.message}`);
    }
    return data;
  } catch (error) {
    console.error("Error fetching marketplace items:", error.message);
    return null;
  }
};

const updateMarketplaceItemQuantity = async (itemId, updatedQuantity) => {
  try {
    console.log("Updating item quantity:", itemId, updatedQuantity);

    const { data, error } = await supabase
      .from("marketplace_items")
      .update({ quantity_available: updatedQuantity })
      .eq("item_id", itemId);

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error updating marketplace item quantity:", error.message);
    return { success: false, error: error.message };
  }
};

const addCartItem = async (itemId, quantity) => {
  try {
    const { data, error } = await supabase
      .from("cart_items")
      .insert([
        {
          item_id: itemId,
          quantity: quantity,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error adding item to cart:", error.message);
    return { success: false, error: error.message };
  }
};

const deleteCartItem = async (cartItemId) => {
  try {
    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("cart_item_id", cartItemId);

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting item from cart:", error.message);
    return { success: false, error: error.message };
  }
};

const updateCartItemQuantity = async (cartItemId, updatedQuantity) => {
  try {
    const { data, error } = await supabase
      .from("cart_items")
      .update({ quantity: updatedQuantity })
      .eq("cart_item_id", cartItemId);

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error updating item quantity in cart:", error.message);
    return { success: false, error: error.message };
  }
};

const fetchCartItems = async () => {
  if (!userId) {
    console.error("No user is logged in");
    return;
  }

  try {
    const { data: cartItemsData, error: cartItemsError } = await supabase
      .from("cart_items")
      .select(
        `
        cart_item_id, 
        quantity, 
        marketplace_items (
          item_id, 
          item_name, 
          item_image_url, 
          unit_price,
					quantity_available
        )
      `
      );

    if (cartItemsError) {
      throw new Error(`Error fetching cart items: ${cartItemsError.message}`);
    }

    return cartItemsData;
  } catch (error) {
    console.error("Error fetching cart items:", error.message);
    return null;
  }
};

export {
  fetchMarketplaceItems,
  updateMarketplaceItemQuantity,
  addCartItem,
  deleteCartItem,
  updateCartItemQuantity,
  fetchCartItems,
};
