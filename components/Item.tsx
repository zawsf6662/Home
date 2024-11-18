import Image from "next/image";
import { Paper, Button } from "@mui/material";

// กำหนด props ให้ Item
interface ItemProps {
  item: {
    name: string;
    description: string;
  };
}

function Item(props: ItemProps) {
  return (
    <Paper>
      <Image
        src={props.item.name} // Image URL
        alt={props.item.description} // Alt text for accessibility
        width={1200} // Width as the aspect ratio basis
        height={800} // Height as the aspect ratio basis
        layout="responsive" // Maintains aspect ratio while scaling
      />
      <h2></h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Item;
