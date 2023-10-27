"use client";

import { useState } from "react";
import Head from "next/head";
import config from "@/config";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Editor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import contactTemplate from "@/templates/contact";
import { GoogleAnalytics } from "@/components/GoogleAnalitics";

const editorStyle: React.CSSProperties = {
  height: 500,
};

export default function Page() {
  const template = contactTemplate;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(false);
  const [description, setDescription] = useState(template);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ terms, description }),
    });
    if (res.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Message failed to send!");
    }
  };
  return (
    <>
      <Head>
        <title>Contact: {config.TITLE}</title>
        <meta
          content="Explore our blog to discover the latest insights and innovations in technology and AI, shaping the future of our digital world."
          name="description"
        />
      </Head>

      <Header />

      <main>
        <section className="relative not-prose scroll-mt-[72px]">
          <div
            className="absolute inset-0 pointer-events-none -z-[1]"
            aria-hidden="true"
          >
            <div className="absolute inset-0" />
          </div>
          <div className="relative px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default max-w-7xl mx-auto">
            <div className="mb-8 md:mx-auto md:mb-12 text-center max-w-3xl">
              <h2 className="font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl md:text-4xl">
                Drop us a message today!
              </h2>
              <p className="mt-4 text-muted text-xl">
                For quicker answers, explore our FAQs section. You may find the
                solution you&apos;re looking for right there! If not, our
                support team is delighted to help you.
              </p>
            </div>
            <div className="flex flex-col max-w-3xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full">
              <form onSubmit={onSubmit}>
                <div>
                  <Editor
                    defaultValue={template}
                    onChange={setDescription}
                    editorStyle={editorStyle}
                  />
                </div>
                <div className="mt-3 flex items-start">
                  <div className="flex mt-0.5">
                    <input
                      id="disclaimer"
                      name="disclaimer"
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => setTerms(e.target.checked)}
                      className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"
                    />
                  </div>
                  <div className="ml-3">
                    <label
                      htmlFor="disclaimer"
                      className="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"
                    >
                      By submitting this contact form, you acknowledge and agree
                      to the collection of your personal information.
                    </label>
                  </div>
                </div>
                <div className="mt-10 grid">
                  <Button
                    className="bg-primary text-white hover:bg-primary-2"
                    disabled={!terms}
                    type="submit"
                  >
                    Contact us
                  </Button>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Our support team typically responds within 24 business
                    hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="relative not-prose scroll-mt-[72px]">
          <div
            className="absolute inset-0 pointer-events-none -z-[1]"
            aria-hidden="true"
          >
            <div className="absolute inset-0" />
          </div>
          <div className="relative px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default max-w-7xl mx-auto">
            <div className="mb-8 md:mx-auto md:mb-12 text-center max-w-3xl">
              <h2 className="font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl md:text-4xl">
                We are here to help!
              </h2>
            </div>
            <div className="grid sm:gap-y-8 lg:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6">
                <div className="text-xl font-bold">General support</div>
                <p className="text-muted mt-2">
                  Chat with us for inquiries related to account management,
                  website navigation, payment issues, accessing purchased
                  templates or general questions about the website&apos;s
                  functionality.
                </p>
              </div>
              <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6">
                <div className="text-xl font-bold">Contact sales</div>
                <p className="text-muted mt-2">
                  Chat with us for questions about purchases, customization
                  options, licensing for commercial use, inquiries about
                  specific template, etc.
                </p>
              </div>
              <div className="relative flex flex-col rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6">
                <div className="text-xl font-bold">Technical support</div>
                <p className="text-muted mt-2">
                  Chat with us when facing issues like template installation,
                  problems editing difficulties, compatibility issues with
                  software or download errors, or other technical challenges
                  related to using the templates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
