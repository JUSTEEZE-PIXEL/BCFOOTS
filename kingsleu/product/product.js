document.addEventListener("DOMContentLoaded", () => {
  const phoneNumber = "2349035994358"; // no + sign

  document.querySelectorAll(".order-btn").forEach(button => {
    button.addEventListener("click", () => {
      // Get product info from button
      const { name, description, sizes, color, price, image } = button.dataset;

      // Build the message
      const message = `Hello, I want to order this product:\n\nProduct: ${name}\nDescription: ${description}\nSizes: ${sizes}\nColor: ${color}\nPrice: ${price}\nImage: ${image}`;

      // Encode for WhatsApp
      const encodedMessage = encodeURIComponent(message);

      // WhatsApp link
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappURL, "_blank");
    });
  });
});
