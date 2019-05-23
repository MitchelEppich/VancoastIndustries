const password = props => {
  let account = props.account.currentUser;
  return (
    <div id="vcPass-tab" className="tabcontent">
      <h1>Change Password</h1>
      <p className="my-4">
        To reset your password, enter your old password and set your new
        password.
      </p>
      <p>
        If you dont know your old password, you can{" "}
        <a aria-label="reset password" href="">
          reset it here
        </a>
        .
      </p>
      <form
        className="vcAccount-details flex flex-col justify-start"
        onSubmit={e => {
          e.preventDefault();
          const form = e.target;
          const formData = new window.FormData(form);

          let password = formData.get("password");
          let newPassword = formData.get("newPassword");

          props.updateAccount({
            _id: account._id,
            password,
            newPassword
          });
        }}
      >
        <label htmlFor="vcPassword">Old Password</label>
        <input
          required
          type="password"
          id="vcPassword"
          name="password"
          placeholder=""
        />
        {props.account.updateError != null ? (
          <div className="-mt-4 text-red">
            <p>{props.account.updateError}</p>
          </div>
        ) : null}

        <label htmlFor="vcNewPassword">New Password*</label>
        <input
          required
          type="password"
          id="vcNewPassword"
          name="newPassword"
          placeholder=""
        />

        <label htmlFor="vcPasswordConfirm">Confirm New Password*</label>
        <input
          required
          type="password"
          id="vcPasswordConfirm"
          placeholder=""
          onChange={e => {
            let value = e.target.value;
            let other = document.querySelector("#vcNewPassword").value;
            if (value != other)
              e.target.setCustomValidity("Passwords do not match each other");
            else e.target.setCustomValidity("");
          }}
        />

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default password;
