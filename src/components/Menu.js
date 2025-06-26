const menuItems = [
  {
    title: "Pizza",
    image: "/images/dish1.jpg",
    description: "Wood-fired pizza with fresh mozzarella and basil.",
  },
  {
    title: "Burger",
    image: "/images/dish2.jpg",
    description: "Juicy beef burger with crispy onions and fries.",
  },
  {
    title: "Drinks",
    image: "/images/dish3.jpg",
    description: "Refreshing fruit cocktails, perfect for summer.",
  },
];

function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.title}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
