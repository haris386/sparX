"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Malik",
    image:
      "/Images/Trusted-by-teams-who-value-clarity-control-and-results..png",
    feedback:
      "Accurascore Transformed How We Manage Our Daily Operations. Everything Is In One Place - From Tasks To Invoices. It's Like Having A Full Operations Team Inside One Dashboard.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    image:
      "/Images/Trusted-by-teams-who-value-clarity-control-and-results..png",
    feedback:
      "The workflow automation has saved us countless hours. What used to take our team days now happens automatically. Accurascore is a game-changer for our business.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image:
      "/Images/Trusted-by-teams-who-value-clarity-control-and-results..png",
    feedback:
      "Finally, a platform that understands our business needs. The financial intelligence features have given us insights we never had before. Highly recommended!",
    rating: 5,
  },
];

const faqs = [
  {
    id: 1,
    question: "Is Accurascore Suitable For Small Companies Too?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    question: "Can I Assign Different Roles To My Team Members?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 3,
    question: "Does Accurascore Automatically Calculate Financials?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 4,
    question: "Is Accurascore Cloud-Based?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 5,
    question: "Can I Export My Data From The System?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
]

export default function LovedByPeople() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
  }

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl mb-5">
        {/* First Row - Hero Section */}
        <div className="text-center mb-16">
          <img
            src="/Images/Loved-by-people.png"
            alt="Loved by People"
            className="mx-auto rounded-3xl"
            style={{ width: "70%" }}
          />
        </div>

        {/* Second Row - Testimonials */}
        <div className="text-center">
          <h3 className="text-2xl  text-gray-900 mb-2">Trusted By Teams Who</h3>
          <p className="text-xl font-bold text-gray-700 mb-12">
            Value Clarity, Control, And Results.
          </p>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src="/Icons/Spiral.png"
              alt="Spiral Background"
              className="absolute w-[480px] h-[480px] top-[-95px] left-[-80px] z-20 pointer-events-none select-none"
            />
            <div className="bg-white rounded-full p-4 md:p-4 relative">
              <div
                className="flex flex-col md:flex-row items-center"
                style={{ gap: "70px" }}
              >
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={
                      testimonials[currentTestimonial].image ||
                      "/placeholder.svg"
                    }
                    alt={testimonials[currentTestimonial].name}
                    className="w-63 h-63 rounded-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {testimonials[currentTestimonial].feedback}
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#0061A4] w-[80px]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

         <div className="mt-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - FAQ Heading */}
            <div>
              <h3 className="text-2xl  text-gray-900 mb-2">
                Frequently
                <br />
                <strong>Asked</strong> Questions
              </h3>
            </div>

            {/* Right Column - FAQ Items */}
            <div className="space-y-4">
  {faqs.map((faq) => (
    <div
      key={faq.id}
      className="bg-white p-[25px] rounded-[10px] border-none"
    >
      <button
        onClick={() => toggleFaq(faq.id)}
        className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors duration-200"
      >
        <span className="text-sm font-medium text-gray-900 pr-4">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
            openFaq === faq.id ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* FAQ Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openFaq === faq.id
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-gray-600 leading-relaxed text-sm">
          {faq.answer}
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
