import Item from "./item";
import { itemBuilder } from "../../../scripts/savedItems";

const index = props => {
  let user = props.account.currentUser;
  if (user == null)
    return (
      <div id="vcSaved-tab" className="tabcontent">
        <h1>Saved Items</h1>
        <p className="my-4">Please sign-in to see your saved items.</p>
      </div>
    );
  let savedItems = user.savedItems || [],
    items = [];
  savedItems = savedItems.filter(function(el) {
    return el != null;
  });
  if (savedItems.length >= 1) {
    items = itemBuilder({
      savedItems,
      products: props.shop.strains
    });
    items = items.map((item, index) => {
      return <Item item={item} key={index} {...props} />;
    });
  }
  return (
    <div id="vcSaved-tab" className="tabcontent">
      <h1>Saved Items</h1>
      {savedItems.length >= 1 ? (
        <div className="vcSaved-content">
          <ul className="vcSaved-list flex flex-row">{items}</ul>
        </div>
      ) : (
        <p className="my-4">No items have been saved yet.</p>
      )}
    </div>
  );
};

export default index;
