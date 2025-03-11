import Card from "./Card";

function CardsMenu() {
  return (
    <div className="CardsContainer">
      <Card
        name="Aziz Chaouch"
        des="Microcontroller & electronics expert, software developer & amateur in 3D animation"
        IsAvailable={true}
        img_link="\IMG_3183.jpg"
      />
      <Card
        name="Skander Jaouadi"
        des="software developer & comedian"
        IsAvailable={true}
        img_link="\skndr.jpg"
      />
      <Card
        name="Nour Aicha Trabelsi"
        des="Processor Architecture expert"
        IsAvailable={true}
        img_link="\nour.jpg"
      />
      <Card />
      <Card />
      <Card></Card>
      <Card />
      <Card />
      <Card></Card>
    </div>
  );
}

export default CardsMenu;
