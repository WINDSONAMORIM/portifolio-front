import { contacts } from "../../data/contacts.data";
import { Contact } from "../../components/contact";

export const SocialMedia = () => {
  return (
    <>
      <section className="w-full pt-4 mx-auto mt-10 md:mt-3 flex justify-evenly overflow-hidden">
        {contacts.map((contact) => (
          <Contact key={contact.name} {...contact} />
        ))}
      </section>
    </>
  );
};
