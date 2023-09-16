import React from 'react'
import BlockContacts from '../../components/Contacts/BlockContacts'
import ContactsForm from '../../components/Contacts/ContactsForm'
import Footer from "../../components/Base/Footer/Footer"

function Contacts() {
  return (
    <div>
      <BlockContacts/>
      <ContactsForm/>
      <Footer/>
    </div>
  )
}

export default Contacts
