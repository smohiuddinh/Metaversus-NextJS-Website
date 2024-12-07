'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Elon Musk" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Elon Musk</span> is a visionary entrepreneur and inventor who has had a profound impact on several industries, from electric vehicles to space exploration. Known for his work with <span className="font-extrabold text-white">Tesla</span>, <span className="font-extrabold text-white">SpaceX</span>, <span className="font-extrabold text-white">Neuralink</span>, and <span className="font-extrabold text-white">The Boring Company</span>, Musk continues to push the boundaries of innovation.
        With his ambitions to colonize Mars and create sustainable solutions on Earth, Musk’s work is paving the way for a new era of technological advancement. Let’s explore his remarkable journey and the lasting impact of his endeavors by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
