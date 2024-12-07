'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-gradient-to-t from-gray-800 to-gray-900`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* Top Section */}
      <div className="flex justify-between flex-wrap gap-5 items-center">
        <h4 className="font-bold text-center md:text-[48px] text-[36px] text-white">
          Thank You for Exploring!
        </h4>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={`/${social.name.toLowerCase()}.svg`}
                alt={social.name}
                className="w-[28px] h-[28px] hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t-[1px] border-gray-700 opacity-20" />

      {/* Copyright Section */}
      <div className="text-center">
        <p className="font-normal text-[14px] text-white opacity-70">
          All information is for educational purposes and sourced from publicly available records.
        </p>
        <p className="font-normal text-[14px] text-white opacity-70 mt-2">
          This blog is not affiliated with Elon Musk or his companies.
        </p>
        <p className="font-normal text-[16px] text-white opacity-50 mt-4">
          &copy; 2024 Syed Mohiuddin. All rights reserved.
        </p>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
