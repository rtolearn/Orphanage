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

const addCartItem = async (itemId, quantity) => {
	try {
		// Fetch the user's cart ID from shopping_carts based on user_id
		const { data: cartData, error: cartError } = await supabase
			.from("shopping_carts")
			.select("cart_id")
			.eq("user_id", userId)
			.single();

		if (cartError || !cartData) {
			throw new Error("Could not find shopping cart for the user.");
		}

		const cartId = cartData.cart_id;

		// Insert the new item into cart_items
		const { data, error } = await supabase.from("cart_items").insert([
			{
				cart_id: cartId,
				item_id: itemId,
				quantity: quantity,
			},
		]);

		if (error) {
			throw error;
		}

		return { success: true, data };
	} catch (error) {
		console.error("Error adding item to cart:", error.message);
		return { success: false, error: error.message };
	}
};

const fetchCartItems = async () => {
	if (!userId) {
		console.error("No user is logged in");
		return;
	}

	try {
		// Step 1: Get the shopping cart ID for the logged-in user
		const { data: cartData, error: cartError } = await supabase
			.from("shopping_carts")
			.select("cart_id")
			.eq("user_id", userId)
			.single();

		if (cartError) {
			throw new Error(`Error fetching shopping cart: ${cartError.message}`);
		}

		const cartId = cartData.cart_id;

		// Step 2: Get cart items and join with marketplace_items for item details
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
          unit_price
        )
      `
			)
			.eq("cart_id", cartId);

		if (cartItemsError) {
			throw new Error(`Error fetching cart items: ${cartItemsError.message}`);
		}

		return cartItemsData;
	} catch (error) {
		console.error("Error fetching cart items:", error.message);
		return null;
	}
};

export { fetchMarketplaceItems, addCartItem, fetchCartItems };
