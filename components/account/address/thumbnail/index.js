const thumbnail = props => {
    let account = props.account.currentUser;
    let address = props.address
    let type = props.type
    let key;
    switch (type) {
        case "billing":
            key = "defaultBilling"
            break;
        case "shipping":
            key = "defaultShipping"
            break;
    }
    let index = props.index
    let isDefault = account[key] == index

    return (
        <div className="border-2 border-grey-light rounded p-3 w-300 text-sm h-200 m-4 scale-item">
            {isDefault ? <p className="absolute -mt-6 pin-r mr-2 font-bold">Default</p> : null}
            <h4 className="font-bold uppercase mt-4 text-left ml-2">{address.name} {address.surname}</h4>
            <div className="">
                <div className="ml-2 mt-1">{address.address}</div>
                <div className="ml-2 mt-1">{address.apartment}</div>
                <div className="ml-2 mt-1">{address.city}, {address.state} {address.postal}</div>
                <div className="ml-2 mt-1">{address.country}</div>
                <div className="ml-2 mt-1">Phone: {address.phone}</div>
                <div className="pin-b absolute mb-2 flex">
                    <div className="mx-2 cursor-pointer hover:text-blue" onClick={() => {
                        props.setAddressToEdit(address)
                    }}>
                        Edit
            </div>
                    |
            <div className="mx-2 cursor-pointer hover:text-blue" onClick={() => {
                        props.deleteAddress({ _id: address._id, account: account._id })
                    }}>
                        Delete
            </div>
                    {!isDefault ? "|" : null}
                    {!isDefault ?

                        <div className="mx-2 cursor-pointer hover:text-blue" onClick={() => {
                            props.updateAccount({
                                _id: account._id,
                                [key]: index
                            });
                        }}>
                            Set Default
            </div>

                        : null}
                </div>
            </div>
        </div>
    );
};

export default thumbnail;
