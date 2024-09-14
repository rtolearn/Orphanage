import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";

const fetchMarketplaceItems = async () => {
	try {
		const { data, error } = await supabase
			.from("marketplace_items")
			.select("*");

		if (error) {
			throw new Error(`Error fetching marketplace items: ${error.message}`);
		}

		if (data) {
			console.log("Marketplace items fetched successfully:", data);
		}

		return data;
	} catch (error) {
		console.error("Error fetching marketplace items:", error.message);
		return null;
	}
};

const fetchCartItems = async () => {
	const userId = useMessageStore().userId; // Get the userId from the store

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

export { fetchMarketplaceItems, fetchCartItems };
