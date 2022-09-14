import React from "react";
import "../css/MailForm.min.css";

export default function MailForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [bodyText, setBodyText] = React.useState("");

  console.log(name, email, bodyText);
  // const handleOnChange = (event: any) => {
  //   const { target } = event;
  //   const { value } = target;
  //   const { name: namename } = target;
  //   console.log(namename);
  //   console.log(value);
  //   switch (name) {
  //     case "name":
  //       setName(value);
  //       break;
  //     case "email":
  //       setEmail(email);
  //       break;
  //     case "bodyText":
  //       setBodyText(value);
  //   }
  // };

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <React.Fragment>
      <form id="myData" onSubmit={handleOnSubmit} autoComplete="off">
        <h2 id="ending-title">
          Let's <b id="ending-title-outline">BUILD</b> Something!
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="What can I help you with?"
          name="bodyText"
          value={bodyText || ""}
          onChange={(e) => setBodyText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul id="contact-info">
        <li>dandyjreyes@gmail.com</li>
        <li>+1 (323) 251-8132</li>
      </ul>
    </React.Fragment>
  );
}
