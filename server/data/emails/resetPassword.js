exports.resetPassword = input => {
  let recipient = "adamsmithvci@gmail.com";
  return {
    from: input.email,
    to: recipient,
    replyTo: input.email,
    recipient,
    subject: "RESET PASSWORD - Vancoast Industries",
    html: `
   <style type="text/css">
      body,
      text,
      p {
        font-family: sans-serif;
        font-size: 14px;
        padding: 2px;
        margin: 0;
        background: white;
      }
    
    </style>

    <p style="background: #fff; font-size: 18px; padding: 15px 0; color: #000;">
      <span style=" color: #000; text-transform: uppercase; font-weight: bold;">Please use the following temporary password <br/> to log in and create a new password in the account menu.</span>
    </p>
    <p style="background: #fff; font-size: 16px;">
      <span style=" text-transform: capitalize; font-weight: bold;">Password:</span>
      <span style=" color: #656565;">${input.pwd}</span>
      <br/>
       <span style=";margin:5px 0; color: #656565;">This password will expire in 24hrs.</span>
    </p>
    <a style="cursor:pointer;"href="https://vancoastindustries.com/login"><button style="cursor:pointer;background: #1426de; color: #fff; border: 0px; border-radius: 3px; font-weight: 700; text-transform: uppercase; padding: 7px 15px">Login</button></a>
   

    

    <div style="background: #fff; display: inline-flex; width: 100%; margin-top: 40px; padding: 10px; align-items: center;">     
      <div style="margin-top: 10px;color: #000;margin-left: 20px;">
        <span style="font-weight: bold">Worldwide:</span> +1-888-376-5956<br />
        <p style="font-weight: bold; margin-top: 10px">www.vancoastindustries.com</p>
      </div>
    </div>`
  };
};
