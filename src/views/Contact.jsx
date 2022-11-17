import React, { useEffect } from "react";
import Search from "../components/Search/Search.jsx";
import BreadcrumbContacts from "../components/Breadcrumb/BreadcrumbContacts.jsx";
import Title from "../components/Title/Title.jsx";
import ContactsContent from "../components/ContactsContent/ContactsContent.jsx";

const Contact = (props) => {
  useEffect(() => {
    props.GetNewsAll(1, 5, 2022);
  }, []);
  return (
    <div className="content">
      <Search />
      <BreadcrumbContacts />
      <Title arrow={false} title="Контакты" />
      <ContactsContent news={props.news} contacts={props.contacts} />
    </div>
  );
};

export default Contact;
