exports.wholesaleApplication = input => {
  let recipient = "adamsmithvci@gmail.com";
  return {
    from: input.email,
    to: recipient,
    replyTo: input.email,
    recipient,
    subject: input.subject + " - Vancoast Industries",
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
      .tg {
        border-collapse: collapse;
        border-spacing: 0;
        background: white;
      }
      .tg td {
        font-family: sans-serif;
        font-size: 14px;
        color: #404040;
        padding: 10px 5px;
        background: white;
        border-style: none;
        border: 0px;
        overflow: hidden;
        word-break: normal;
        
      }
      .tg th {
        font-family: sans-serif;
        font-size: 14px;
        font-weight: normal;
        padding: 10px 5px;
        background: white;
        border-style: none;        
        border: 0px;
        overflow: hidden;
        word-break: normal;
        
      }
      .tg-0lax {
        text-align: left;
        padding: 5px 14px;
        vertical-align: top;
      }
      .tg-1lax {
    text-align: left;
    padding: 5px 14px;
    width: 135px;
      }
      .bold {
        font-weight: bold;
        text-transform: uppercase;
      }
    </style>

    <p
      style="background: #fff;
      font-size: 18px;
      padding: 15px; "
    >
      <span style=" text-transform: uppercase; font-weight: bold;">Subject:</span>
      <span
        style="
        text-transform: uppercase;
        color: #656565;
        
    "
        >${input.subject}</span
      >
    </p>

    <table style="background: #fff; border: 0" class="tg">   
    ${
      input.company
        ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Company:</td>
        <td class="tg-0lax">${input.company}</td>
      </tr>`
        : `<tr style="background: white"></tr>`
    }
      <tr style="margin-top: 20px; padding: 5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Full Name:</td>
        <td class="tg-0lax">${input.name}</td>
      </tr>
      <tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Email Address:</td>
        <td class="tg-0lax">${input.email}</td>
      </tr>
       ${
         input.phone
           ? `<tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">Phone:</td>
        <td class="tg-0lax">${input.phone}</td>
      </tr>`
           : `<tr style="background: white"></tr>`
       }
      <tr style="padding:5px 0; background: #fff;">
        <td style="vertical-align: top; font-weight: bold; text-transform: uppercase; width: 130px" class="tg-0lax bold">About the company:</td>
        <td class="tg-0lax">${input.body}</td>
      </tr>
     <a aria-label="review wholesale app" href="https://vancoastindustries.com/admin" ><button style="background-color: #1629DF; border-radius: 1rem; color: white; cursor: pointer; margin: 20px auto; padding: 5px 10px; width: 200px">Review Now</button></a>
     
 
    </table>

    <div
      style="  
            background: #fff;
            display: inline-flex;
            width: 100%;
            margin-top: 40px;
            padding: 10px;
            align-items: center;
            "
    >     
      <div style="margin-top: 10px;color: #000;margin-left: 20px;">
        <span style="font-weight: bold">Worldwide:</span> +1-888-376-5956<br />
        <p style="font-weight: bold; margin-top: 10px">www.vancoastindustries.com</p>
      </div>
    </div>`
  };
};
