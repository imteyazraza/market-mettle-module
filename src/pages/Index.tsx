import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import Header from "@/components/ecommerce/Header";
import Hero from "@/components/ecommerce/Hero";
import ProductGrid from "@/components/ecommerce/ProductGrid";
import ShoppingCart from "@/components/ecommerce/ShoppingCart";
import { Product } from "@/components/ecommerce/ProductCard";

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={handleCartClick}
      />
      
      <main>
        <Hero />
        <ProductGrid onAddToCart={handleAddToCart} />
      </main>

      <ShoppingCart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
};

export default Index;
