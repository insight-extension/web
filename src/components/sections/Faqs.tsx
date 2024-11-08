import { useState } from "react";
import { Accordion } from "../Accordion";
const accordions = [
    {
        title: "How does the browser extension work?",
        description: "1",
    },
    {
        title: "What languages are supported?",
        description:
            "Absolutely. All translations are processed locally on your device, ensuring your data stays private and secure",
    },
    {
        title: "Is my data safe while using the extension?",
        description: "3",
    },
    {
        title: "Can I use this on multiple devices?",
        description: "3",
    },
    {
        title: "How accurate are the translations?",
        description: "3",
    },
];
export const Faqs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleAccordionClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section className="mt-[170px]" id="faqs">
                <div className="container">
                    <article className="mb-16">
                        <h2 className="font-sofiaPro text-[76px] font-medium">
                            FAQS
                        </h2>
                    </article>
                    <article className="">
                        <div className="ml-auto w-full max-w-[872px]">
                            {accordions.map((accordion, index) => (
                                <Accordion
                                    key={index}
                                    title={accordion.title}
                                    description={accordion.description}
                                    isOpen={openIndex === index}
                                    onClick={() => handleAccordionClick(index)}
                                />
                            ))}
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};
