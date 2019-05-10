import Item from "./item";
import { itemBuilder } from "../../../scripts/savedItems";

const index = props => {
  let items = itemBuilder({
    savedItems: props.account.currentUser.savedItems,
    products: props.shop.strains
  });
  items = items.map((item, index) => {
    return <Item item={item} key={index} {...props} />;
  });
  return (
    <div id="vcSaved-tab" className="tabcontent">
      <h1>Saved Items</h1>
      <div className="vcSaved-content">
        <ul className="vcSaved-list flex flex-row">{items}</ul>
      </div>
    </div>
  );
};

export default index;
