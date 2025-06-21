import React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
interface FormState {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isValidEmail = (email: string) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  const [invalidEmail, setInvalidEmail] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();

  const submitHandler = async (data: FormState) => {
    try {
      await axios.post(
        "https://discord.com/api/webhooks/1204707579821817866/oRh72hieHx4kAeoplN_tqznPPXL8nYx9fOI9xd6GMFNLnBHmRw625oA8c_n1lkGQWSld",
        {
          content: "Hi, new message from your website!",
          embeds: [
            {
              title: "New Message",
              description: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
            },
          ],
        }
      );

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error posting message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. Feel free to reach
                out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Mail
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    musyafart@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <Phone
                    className="text-green-600 dark:text-green-400"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +62 85775184434
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <MapPin
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bekasi, Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Response Time
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to messages within 24 hours. For urgent
                matters, feel free to call or send a follow-up email.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Full name is required" })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) =>
                      isValidEmail(value) || "Invalid email format",
                  })}
                  type="email"
                  id="email"
                  onBlur={(e) => setInvalidEmail(!isValidEmail(e.target.value))}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    invalidEmail
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
                {errors.message && (
                  <p className="text-red-500 mt-1 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
