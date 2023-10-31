"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import contactTemplate from "@/templates/contact";
import { RegisterForm } from "@/components/forms/register";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MakeModelQuestionAnswering } from "@/services/llms/question-answering";
import { QuestionAnsweringModelBase } from "@/services/llms/question-answering/QuestionAnsweringModelBase";
import { useRouter } from "next/navigation";
import { Contact } from "@/components/Contact";

const pre = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;

export default function Index() {
  const template = contactTemplate;
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState(template);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [model, setModel] = useState<QuestionAnsweringModelBase | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onSend = async () => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ terms, description, name, email }),
    });
    if (res.ok) {
      alert("Message sent successfully!");
      router.push("/");
    } else {
      alert("Message failed to send!");
    }
  };

  const onContinue = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const exists = pre.exec(description);
    if (exists?.length) {
      setEmail(exists[0]);
    }

    if (model !== null) {
      const { answer } = await model.answerer(
        "What is the name of the person on the document?",
        description
      );
      setName(answer);
    }
  };

  useEffect(() => {
    if (isLoaded) return;

    setIsLoaded(true);
    const model = MakeModelQuestionAnswering();
    setModel(model);
    model.loadModel();
  }, [isLoaded]);

  return (
    <>
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
            <div className="max-w-3xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 w-full">
              <form onSubmit={onSubmit}>
                <div>
                  <textarea
                    className="w-full h-96 border border-gray-200 rounded-lg p-4 dark:text-white"
                    onChange={({ target }) => {
                      setDescription(target.value);
                    }}
                    value={description}
                  ></textarea>
                </div>

                <div className="mt-5 grid">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-primary text-white hover:bg-primary-2"
                        type="button"
                        onClick={onContinue}
                      >
                        Continue
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white gap-2">
                      <DialogHeader>
                        <DialogTitle>Register</DialogTitle>
                        <DialogDescription className="text-justify">
                          Please share your contact details with us for better
                          communication and updates.
                        </DialogDescription>
                      </DialogHeader>
                      <RegisterForm
                        email={email}
                        name={name}
                        emailOnChange={setEmail}
                        nameOnChange={setName}
                      />
                      <div>
                        <div className="flex items-start">
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
                              Submitting this form requires your contact info.
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          className="text-white w-full"
                          disabled={!terms}
                          type="submit"
                          onClick={onSend}
                        >
                          Send
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
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

        <Contact />
      </main>

      <Footer />
    </>
  );
}
