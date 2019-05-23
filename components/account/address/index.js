import Thumbnail from "./thumbnail";
import DefaultThumbnail from "./thumbnail/default";
import Editor from "./editor";

const AddressModule = props => {
  let addresses = props.addresses;

  let shippingAddresses = () => {
    let arr = [<DefaultThumbnail key={addresses.length} {...props} />];
    let index = 0;
    for (let address of addresses) {
      arr.push(
        <Thumbnail address={address} {...props} index={index} key={index} />
      );
      index++;
    }

    return arr;
  };

  return (
    <div>
      {props.misc.addressForEditor != null ? (
        <Editor {...props} />
      ) : (
        <div className="flex flex-wrap w-full mt-10 mb-6">
          {shippingAddresses()}
        </div>
      )}
    </div>
  );
};

export default AddressModule;
