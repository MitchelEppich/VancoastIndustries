const password = props => {
    return (
        <div id="vcPass-tab" className="tabcontent">
            <h1>Reset Password</h1>
            <p>To reset your password, enter your old password and set your new password.</p>
            <p>
                If you dont know your old password, you can <a href="">reset it here</a>.
            </p>
            <form className="vcAccount-details flex flex-col justify-start">
                <label htmlFor="vcOld-pass">Old Password</label>
                <input type="text" id="vcOld-pass" placeholder="******" />

                <label htmlFor="vcNew-pass">New Password*</label>
                <input type="text" id="vcNew-pass" placeholder="" />

                <label htmlFor="vcNew-passConfirm">Confirm New Password*</label>
                <input type="text" id="vcNew-passConfirm" placeholder="" />

                <input type="submit" value="Save" />
            </form>
        </div>
    );
};

export default password;
